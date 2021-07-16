import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CategoriaPregunta } from './categoria-pregunta.interface';
import { Publicacion } from './publicacion.entity';
import { Respuesta } from './respuesta.entity';

@Entity({ name: 'Pregunta' })
export class Pregunta {
  @PrimaryGeneratedColumn({ name: 'id_pregunta' })
  idPregunta: number;

  @ManyToOne(() => CategoriaPregunta, (categoria) => categoria.preguntas)
  @JoinColumn({ name: 'id_categoria_pregunta' })
  categoria: CategoriaPregunta;

  @OneToOne(() => Publicacion)
  @JoinColumn({ name: 'id_publicacion' })
  publicacion: Publicacion;

  @OneToMany(() => Respuesta, (respuesta) => respuesta.pregunta)
  respuestas: Respuesta[];

  @Column({ name: 'titulo' })
  titulo: string;

  @Column({ name: 'contenido' })
  contenido: string;

  @Column({ name: 'estado' })
  estado: string;
}
