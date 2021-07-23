import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Publicacion } from 'src/publicaciones/entities/publicacion.entity';


@Entity({ name: 'Denuncia' })
export class Denuncia {
  @PrimaryGeneratedColumn({ name: 'id_denuncia' })
  @IsNumber()
  @IsNotEmpty()
  idDenuncia: number;

  @OneToOne(() => Publicacion)
  @JoinColumn({ name: 'id_publicacion' })
  @IsNotEmpty()
  publicacion: Publicacion;

  @Column({ name: 'modo_canal' })
  @IsString()
  @IsNotEmpty()
  modoCanal: string;

  @Column({ name: 'telefono_contacto' })
  @IsString()
  @IsNotEmpty()
  telefonoContacto: string;

  @Column({ name: 'estado' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @Column({ name: 'tipo_denuncia' })
  @IsString()
  @IsNotEmpty()
  tipoDenuncia: string;

  @Column({ name: 'descripcion_hechos' })
  @IsString()
  @IsNotEmpty()
  descripcionHechos: string;

  @Column({ name: 'adjunto' })
  @IsString()
  @IsNotEmpty()
  adjunto: string;
}
