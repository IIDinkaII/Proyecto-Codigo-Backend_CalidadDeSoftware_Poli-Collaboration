import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local'
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local'){
    constructor(private authService: AuthService){
        super();
    }

    async validate(email: string, password: string){
        const usuario = this.authService.validarUsuario(email, password);
        if(!usuario){
            throw new UnauthorizedException('Poli Collaboration - No autorizado')
        }
        return usuario;
    }
}