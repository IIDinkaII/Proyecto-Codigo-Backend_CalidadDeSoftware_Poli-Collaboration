import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';


@Entity({ name: 'Estado_Usuario' })
export class EstadoUsuario {
  @PrimaryGeneratedColumn({ name: 'id_estado_usuario' })
  @IsNumber()
  @IsNotEmpty()
  idEstadoUsuario: number;

  @Column({ name: 'nombre_estado_usuario' })
  @IsString()
  @IsNotEmpty()
  nombreEstadoUsuario: string;

  @Column({ name: 'fecha_creacion' })
  @IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  @IsDate()
  @IsNotEmpty()
  ultimaActualizacion: Date;

  @OneToMany(() => Usuario, (usuario) => usuario.estado)
  @IsNotEmpty()
  usuarios: Usuario[];
}
