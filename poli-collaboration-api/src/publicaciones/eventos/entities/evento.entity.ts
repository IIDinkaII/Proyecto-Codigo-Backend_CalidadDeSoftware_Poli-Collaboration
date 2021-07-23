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
import { Publicacion } from '../../entities/publicacion.entity';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';


@Entity({ name: 'Evento' })
export class Evento {
  @PrimaryGeneratedColumn({ name: 'id_evento' })
  @IsNumber()
  @IsNotEmpty()
  idEvento: number;

  @OneToOne(() => Publicacion)
  @JoinColumn({ name: 'id_publicacion' })
  @IsNotEmpty()
  publicacion: Publicacion;

  @ManyToOne(() => CategoriaEvento, (categoria) => categoria.eventos)
  @JoinColumn({ name: 'id_categoria' })
  @IsNotEmpty()
  categoriaEvento: CategoriaEvento;

  @Column({ name: 'titulo_evento' })
  @IsString()
  @IsNotEmpty()
  tituloEvento: string;

  @Column({ name: 'orginazador' })
  @IsString()
  @IsNotEmpty()
  organizador: string;

  @Column({ name: 'date_time_evento' })
  @IsDate()
  @IsNotEmpty()
  dateTimeEvento: Date;

  @Column({ name: 'descripcion' })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Column({ name: 'estado' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @Column({ name: 'numero_interesados' })
  @IsNumber()
  @IsNotEmpty()
  numeroInteresados: number;

  @Column({ name: 'fecha_expiracion' })
  @IsDate()
  @IsNotEmpty()
  fechaExpiracion: Date;
}
