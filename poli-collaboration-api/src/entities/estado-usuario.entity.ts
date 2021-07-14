import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity({name: 'Estado_Usuario'})
export class EstadoUsuario{

    @PrimaryGeneratedColumn({name: 'id_estado_usuario'})
    idEstadoUsuario: number;

    @Column({name: 'nombre_estado_usuario'})
    nombreEstadoUsuario : string

    @Column({name: 'fecha_creacion'})
    fechaCreacion : Date

    @Column({name: 'ultima_actualizacion'})
    ultimaActualizacion : Date

    @OneToMany(() => Usuario, usuario => usuario.estado)
    usuarios: Usuario[];
}