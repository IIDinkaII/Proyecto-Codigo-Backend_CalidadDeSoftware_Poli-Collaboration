import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail } from "class-validator";

@Entity()
export class Usuario{

    @PrimaryGeneratedColumn({name: 'id_usuario'})
    idUsuario: number;

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
}