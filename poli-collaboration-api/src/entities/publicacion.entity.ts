import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';


@Entity({ name: 'Publicacion' })
export class Publicacion {
  @PrimaryGeneratedColumn({ name: 'id_publicacion' })
  @IsNumber()
  @IsNotEmpty()
  idPublicacion: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.publicaciones)
  @JoinColumn({ name: 'id_usuario' })
  @IsNotEmpty()
  usuario: Usuario;

  @Column({ name: 'fecha_creacion' })
  @IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  @IsDate()
  @IsNotEmpty()
  ultimaActualizacion: Date;
}
