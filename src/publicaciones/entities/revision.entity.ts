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
  @PrimaryGeneratedColumn({ name: 'idRevision' })
  @IsNotEmpty()
  @IsNumber()
  idRevision: number;

  @OneToOne(() => Publicacion)
  @JoinColumn({ name: 'idPublicacion' })
  @IsNotEmpty()
  @IsNumber()
  idPublicacion: number;

  @Column({ name: 'observacion' })
  @IsNotEmpty()
  @IsString()
  observacion: string;

  @Column({ name: 'fechaGestion' })
  @IsDate()
  @IsNotEmpty()
  fechaGestion: Date;

  @Column({ name: 'fechaCreacion' })
  @IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;

  @Column({ name: 'fechaActualizacion' })
  @IsDate()
  @IsNotEmpty()
  fechaActualizacion: Date;
}
