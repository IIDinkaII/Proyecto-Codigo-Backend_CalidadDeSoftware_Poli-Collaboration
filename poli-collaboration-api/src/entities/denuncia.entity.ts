import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Publicacion } from "./publicacion.entity";

@Entity({name: 'Denuncia'})
export class Denuncia{

    @PrimaryGeneratedColumn({name: 'id_denuncia'})
    idDenuncia : number;

    @OneToOne( () => Publicacion)
    @JoinColumn({name: "id_publicacion"})
    
    @Column({name: 'modo_canal'})
    modoCanal : string;

    @Column({name: 'telefono_contacto'})
    telefonoContacto : string;

    @Column({name: 'estado'})
    estado : string;

    @Column({name: 'tipo_denuncia'})
    tipoDenuncia : string;

    @Column({name: 'descripcion_hechos'})
    descripcionHechos : string;

    @Column({name: 'adjunto'})
    adjunto : string;

}