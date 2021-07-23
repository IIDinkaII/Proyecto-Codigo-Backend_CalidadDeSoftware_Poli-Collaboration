import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pregunta } from './pregunta.entity';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Entity({ name: 'Categoria_Pregunta' })
export class CategoriaPregunta {
  @PrimaryGeneratedColumn({ name: 'id_categoria_pregunta' })
  @IsNumber()
  @IsNotEmpty()
  idCategoriaPregunta: number;

  @OneToMany(() => Pregunta, (pregunta) => pregunta.categoriaPregunta)
  @IsNotEmpty()
  preguntas: Pregunta[];

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
