import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Accion } from "./accion.entity";
import { UsuarioRol } from "./usuario-rol.entity";

@Entity({name: 'Rol'})
export class Rol{

    @PrimaryGeneratedColumn({name: 'id_rol'})
    idRol : number;

    @Column({name: 'nombre_rol'})
    nombreRol : string;

    @Column({name: 'fecha_creacion'})
    fechaCreacion : Date

    @Column({name: 'ultima_actualizacion'})
    ultimaActualizacion : Date

    @OneToMany(() => UsuarioRol, usuarioRol => usuarioRol.rol)
    usuariosRol : UsuarioRol[]

    @OneToMany(() => Accion, accion => accion.rol)
    acciones: Accion[]
}