import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsuarioModule } from 'src/usuarios/usuario.module';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UsuarioModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}