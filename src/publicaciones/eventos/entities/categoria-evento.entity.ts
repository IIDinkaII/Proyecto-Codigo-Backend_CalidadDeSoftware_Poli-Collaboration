import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Evento } from './evento.entity';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Entity({ name: 'Categoria_Evento' })
export class CategoriaEvento {
  @PrimaryGeneratedColumn({ name: 'id_categoria_evento' })
  @IsNumber()
  @IsNotEmpty()
  idCategoriaEvento: number;

  @OneToMany(() => Evento, (evento) => evento.categoriaEvento)
  eventos: Evento[];
  @IsNotEmpty()

  @Column({ name: 'nombre_categoria' })
  @IsString()
  @IsNotEmpty()
  nombreCategoria: string;

  @Column({ name: 'descripcion' })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Column({ name: 'fecha_creacion' })
  @IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  @IsDate()
  @IsNotEmpty()
  ultimaActualizacion: Date;
}
