import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity({name: 'Publicacion'})
export class Publicacion{

    @PrimaryGeneratedColumn({name: 'id_publicacion'})
    idPublicacion: number;

    @ManyToOne(() => Usuario, usuario => usuario.publicaciones)
    @JoinColumn({name: "id_usuario"})
    usuario : Usuario

    @Column({name: 'fecha_creacion'})
    fechaCreacion : Date

    @Column({name: 'ultima_actualizacion'})
    ultimaActualizacion : Date

}