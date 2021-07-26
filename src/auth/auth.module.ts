import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsuarioService } from 'src/usuarios/services/usuario.service';
import { UsuarioModule } from 'src/usuarios/usuario.module';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [UsuarioModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}