import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuarios/services/usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usaurioService: UsuarioService) {}
  
  async validarUsuario(email: string, password: string) {
    const user = await this.usaurioService.findByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const { password, ...obj } = user;
        return obj;
      }
    }
    return null;
  }
}
