import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Rol } from "./rol.entity";
import { Usuario } from "./usuario.entity";

@Entity({name: 'Usuario_Rol'})
export class UsuarioRol{

    @PrimaryGeneratedColumn({name: 'id_usuario_rol'})
    idUsuarioRol: number;

    @ManyToOne(() => Usuario, usuario => usuario.usuariosRol)
    @JoinColumn({name: "id_usuario"})
    usuario : Usuario

    @ManyToOne(() => Rol, rol => rol.usuariosRol)
    @JoinColumn({name: "id_rol"})
    rol : Rol

}