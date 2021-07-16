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
  idRespuesta: number;

  @ManyToOne(() => Pregunta, (pregunta) => pregunta.respuestas)
  @JoinColumn({ name: 'id_pregunta' })
  pregunta: Pregunta;

  @ManyToOne(() => Usuario, (usuario) => usuario.respuestas)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Respuesta;

  @Column({ name: 'titulo' })
  titulo: string;

  @Column({ name: 'contenido' })
  contenido: string;

  @Column({ name: 'estado' })
  estado: string;
}
