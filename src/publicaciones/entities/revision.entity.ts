import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn
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

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @IsNotEmpty()
  fechaGestion: Date;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @IsNotEmpty()
  fechaCreacion: Date;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @IsNotEmpty()
  fechaActualizacion: Date;
}
