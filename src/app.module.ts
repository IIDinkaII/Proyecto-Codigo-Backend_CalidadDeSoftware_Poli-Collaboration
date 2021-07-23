import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DenunciasModule } from './publicaciones/denuncias/denuncias.module';
import { UsuarioModule } from './usuarios/usuario.module';
import { environments } from './enviroments';
import config from './config';

import * as Joi from 'joi';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        HOST: Joi.string().required(),
        PORT: Joi.number(),
        DATABASE: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        PASSWORD: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'poli.coi1ljpzniw0.us-west-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'poli',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    DenunciasModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
