import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Denuncia } from "./denuncia.entity";
import { Publicacion } from "./publicacion.entity";

@Entity({name: 'Revision'})
export class Revision{

    @PrimaryGeneratedColumn({name: 'id_revision'})
    idRevision : number;

    @OneToOne( () => Publicacion)
    @JoinColumn({name: "id_publicacion"})
    idPublicacion : number
    
    @Column({name: 'observacion'})
    observacion : string;
   
    @Column({name: 'fecha_gestion'})
    fechaGestion : Date;

    @Column({name: 'fecha_creacion'})
    fechaCreacion : Date;

    @Column({name: 'fecha_actualizacion'})
    fechaActualizacion : Date;

}