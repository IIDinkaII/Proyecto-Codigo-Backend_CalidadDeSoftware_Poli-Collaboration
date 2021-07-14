import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Perfil_Usuario'})
export class PerfilUsuario{

    @PrimaryGeneratedColumn({name: 'id_perfil'})
    idPerfil : number;

    @Column({name: 'numero_preguntas'})
    numeroPreguntas : number

    @Column({name: 'numero_respuestas'})
    numeroRespuestas : number

    @Column({name: 'fecha_creacion'})
    fechaCreacion : Date

    @Column({name: 'ultima_actualizacion'})
    ultimaActualizacion : Date
}