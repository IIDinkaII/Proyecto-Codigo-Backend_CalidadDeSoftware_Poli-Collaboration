import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Usuario_Rol'})
export class UsuarioRol{

    @PrimaryGeneratedColumn({name: 'id_usuario_rol'})
    idUsuarioRol: number;

    @Column({name: 'nombre_estado_usuario'})
    nombreEstadoUsuario : string

    @Column({name: 'fecha_creacion'})
    fechaCreacion : Date

    @Column({name: 'ultima_actualizacion'})
    ultimaActualizacion : Date
}