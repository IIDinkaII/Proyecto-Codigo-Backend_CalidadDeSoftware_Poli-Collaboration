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

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        HOST: Joi.string().required(),
        PORT: Joi.number().required(),
        DATABASE: Joi.string().required(),
        USERNAME: Joi.string().required(),
        PASSWORD: Joi.string().required(),
      }),
    }),
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
