import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Evento } from './evento.entity';

@Entity({ name: 'Categoria_Evento' })
export class CategoriaEvento {
  @PrimaryGeneratedColumn({ name: 'id_categoria_evento' })
  idCategoriaEvento: number;

  @OneToMany(() => Evento, (evento) => evento.categoriaEvento)
  eventos: Evento[];

  @Column({ name: 'nombre_categoria' })
  nombreCategoria: string;

  @Column({ name: 'descripcion' })
  descripcion: string;

  @Column({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  ultimaActualizacion: Date;
}
