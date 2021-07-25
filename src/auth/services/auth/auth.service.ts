import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuarios/services/usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usaurioService: UsuarioService){};

    async validarUsuario(correoInstitucional: string, password: string){
        const usuario = await this.usaurioService.findByEmail(correoInstitucional);
        const isMatch = bcrypt.compare(password, usuario.password);
        if(usuario && isMatch){
            return usuario;
        }
        return null;
    };
}
