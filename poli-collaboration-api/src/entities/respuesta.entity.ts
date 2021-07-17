import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CategoriaPregunta } from './categoria-pregunta.entity';
import { Pregunta } from './pregunta.entity';
import { Publicacion } from './publicacion.entity';
import { Usuario } from './usuario.entity';

@Entity({ name: 'Respuesta' })
export class Respuesta {
  @PrimaryGeneratedColumn({ name: 'id_respuesta' })
  @IsNotEmpty()
  @IsNumber()
  idRespuesta: number;

  @ManyToOne(() => Pregunta, (pregunta) => pregunta.respuestas)
  @JoinColumn({ name: 'id_pregunta' })
  @IsNotEmpty()
  pregunta: Pregunta;

  @ManyToOne(() => Usuario, (usuario) => usuario.respuestas)
  @JoinColumn({ name: 'id_usuario' })
  @IsNotEmpty()
  usuario: Respuesta;

  @Column({ name: 'titulo' })
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @Column({ name: 'contenido' })
  @IsNotEmpty()
  @IsString()
  contenido: string;

  @Column({ name: 'estado' })
  @IsNotEmpty()
  @IsString()
  estado: string;
}
