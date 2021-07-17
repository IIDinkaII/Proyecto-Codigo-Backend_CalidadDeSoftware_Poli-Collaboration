import { IsAlphanumeric, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Perfil_Usuario' })
export class PerfilUsuario {
  @PrimaryGeneratedColumn({ name: 'id_perfil' })
  @IsNumber()
  @IsNotEmpty()
  idPerfil: number;

  @Column({ name: 'numero_preguntas' })
  @IsNumber()
  @IsNotEmpty()
  numeroPreguntas: number;

  @Column({ name: 'numero_respuestas' })
  @IsNumber()
  @IsNotEmpty()
  numeroRespuestas: number;

  @Column({ name: 'fecha_creacion' })
  @IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  @IsDate()
  @IsNotEmpty()
  ultimaActualizacion: Date;
}
