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
        const { username, host, name, password } = configService.database;
        const pgClient = new Client({
          user: 'postgres',
          host: 'poli.coi1ljpzniw0.us-west-1.rds.amazonaws.com',
          database: 'poli',
          password: 'admin123',
          port: 5432,
        });
        pgClient.connect();
      },
      inject: [config.KEY],
    },
  ],
  exports: ['PG'],
})
export class DatabaseModule {}
