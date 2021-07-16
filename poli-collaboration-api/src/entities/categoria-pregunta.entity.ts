import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';
import { Pregunta } from './pregunta.entity';

@Entity({ name: 'Categoria_Pregunta' })
export class CategoriaPregunta {
  @PrimaryGeneratedColumn({ name: 'id_categoria_pregunta' })
  idCategoriaPregunta: number;

  @OneToMany(() => Pregunta, (pregunta) => pregunta.categoriaPregunta)
  preguntas: Pregunta[];

  @Column({ name: 'nombre_categoria' })
  nombreCategoria: string;

  @Column({ name: 'descripcion' })
  descripcion: string;

  @Column({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  ultimaActualizacion: Date;
}
