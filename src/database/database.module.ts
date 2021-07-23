import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from 'src/config';

@Global()
@Module({
  providers: [
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, host, name, password, databasePort } =
          configService.database;
        console.log(username, host, name, password, databasePort);
        const pgClient = new Client({
          user: username,
          host: host,
          database: name,
          password: password,
          port: databasePort,
        });
        console.log('pgCliente: ' + pgClient);
        pgClient.connect();
        return pgClient;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['PG'],
})
export class DatabaseModule {}
