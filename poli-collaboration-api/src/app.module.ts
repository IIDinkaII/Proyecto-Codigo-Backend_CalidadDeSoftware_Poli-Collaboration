import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DenunciasModule } from './publicaciones/denuncias/denuncias.module';
import { UsuarioModule } from './usuarios/usuario.module';

@Module({
  imports: [
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
