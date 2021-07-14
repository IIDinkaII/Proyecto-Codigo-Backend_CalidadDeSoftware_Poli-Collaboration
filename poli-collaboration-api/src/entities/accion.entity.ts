import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Rol } from "./rol.entity";

@Entity({name: 'Accion'})
export class Accion{

    @PrimaryGeneratedColumn({name: 'id_accion'})
    idAccion : number;

    @ManyToOne(() => Rol, rol => rol.acciones)
    @JoinColumn({name: 'id_rol'})
    rol : Rol

    @Column({name: 'nombre_accion'})
    nombreAccion : string;

    @Column({name: 'fecha_creacion'})
    fechaCreacion : Date

    @Column({name: 'ultima_actualizacion'})
    ultimaActualizacion : Date

}