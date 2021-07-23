import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Publicacion } from './publicacion.entity';

@Entity({ name: 'Revision' })
export class Revision {
  @PrimaryGeneratedColumn({ name: 'id_revision' })
  @IsNotEmpty()
  @IsNumber()
  idRevision: number;

  @OneToOne(() => Publicacion)
  @JoinColumn({ name: 'id_publicacion' })
  @IsNotEmpty()
  @IsNumber()
  idPublicacion: number;

  @Column({ name: 'observacion' })
  @IsNotEmpty()
  @IsString()
  observacion: string;

  @Column({ name: 'fecha_gestion' })
  @IsDate()
  @IsNotEmpty()
  fechaGestion: Date;

  @Column({ name: 'fecha_creacion' })
  @IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;

  @Column({ name: 'fecha_actualizacion' })
  @IsDate()
  @IsNotEmpty()
  fechaActualizacion: Date;
}
