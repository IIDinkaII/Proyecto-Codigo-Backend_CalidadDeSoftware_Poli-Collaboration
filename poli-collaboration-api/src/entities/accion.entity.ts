import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Rol } from './rol.entity';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Entity({ name: 'Accion' })
export class Accion {
  @PrimaryGeneratedColumn({ name: 'id_accion' })
  @IsNumber()
  @IsNotEmpty()
  idAccion: number;

  @ManyToOne(() => Rol, (rol) => rol.acciones)
  @JoinColumn({ name: 'id_rol' })
  @IsNotEmpty()
  rol: Rol;

  @Column({ name: 'nombre_accion' })
  @IsString()
  @IsNotEmpty()
  nombreAccion: string;

  @Column({ name: 'fecha_creacion' })
  @IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  @IsDate()
  @IsNotEmpty()
  ultimaActualizacion: Date;
}
