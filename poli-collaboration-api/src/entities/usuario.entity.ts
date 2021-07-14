import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { IsEmail } from "class-validator";
import { EstadoUsuario } from "./estado-usuario.entity";
import { UsuarioRol } from "./usuario-rol.entity";
import { PerfilUsuario } from "./pefil-usuario.entity";

@Entity("Usuario")
export class Usuario{

    @PrimaryGeneratedColumn({name: 'id_usuario'})
    idUsuario: number;

    @ManyToOne(() => EstadoUsuario, estado => estado.usuarios)
    @JoinColumn({name: "id_estado_usuario"})
    estado: EstadoUsuario;

    @OneToOne(() => PerfilUsuario)
    @JoinColumn({name: 'id_perfil_usuario'})
    perfil: PerfilUsuario;

    @Column({name: 'correo_institucional'})
    @IsEmail()
    correoInstitucional : string

    @Column({name: 'nombres'})
    nombres : string

    @Column({name: 'apellidos'})
    apellidos : string

    @Column({name: 'fecha_nacimiento'})
    fechaNacimiento : Date

    @Column({name: 'carrera'})
    carrera : String

    @Column({name: 'facultad'})
    facultad : String

    @Column({name: 'password'})
    password : String

    @Column({name: 'fecha_creacion'})
    fechaCreacion : Date

    @Column({name: 'ultima_actualizacion'})
    ultimaActualizacion : Date

    @OneToMany(() => UsuarioRol, usuarioRol => usuarioRol.usuario)
    usuariosRol : UsuarioRol[]


}