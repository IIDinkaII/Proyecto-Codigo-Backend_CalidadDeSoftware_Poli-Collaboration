import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { CategoriaEvento } from './categoria-evento.entity';
import { Publicacion } from './publicacion.entity';

@Entity({ name: 'Evento' })
export class Evento {
  @PrimaryGeneratedColumn({ name: 'id_evento' })
  idEvento: number;

  @OneToOne(() => Publicacion)
  @JoinColumn({ name: 'id_publicacion' })
  publicacion: Publicacion;

  @ManyToOne(() => CategoriaEvento, (categoria) => categoria.eventos)
  @JoinColumn({ name: 'id_categoria' })
  categoriaEvento: CategoriaEvento;

  @Column({ name: 'titulo_evento' })
  tituloEvento: string;

  @Column({ name: 'orginazador' })
  organizador: string;

  @Column({ name: 'date_time_evento' })
  dateTimeEvento: Date;

  @Column({ name: 'descripcion' })
  descripcion: string;

  @Column({ name: 'estado' })
  estado: string;

  @Column({ name: 'numero_interesados' })
  numeroInteresados: number;

  @Column({ name: 'fecha_expiracion' })
  fechaExpiracion: Date;
}
