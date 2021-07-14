import { Module } from '@nestjs/common';
import { LoginService } from './services/login.service';
import { LoginController } from './controllers/login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../poli/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario])
  ],
  providers: [LoginService],
  controllers: [LoginController]
})
export class LoginModule {}
