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
  @PrimaryGeneratedColumn({ name: 'idDenuncia' })
  @IsNumber()
  @IsNotEmpty()
  idDenuncia: number;

  @OneToOne(() => Publicacion)
  @JoinColumn({ name: 'idPublicacion' })
  @IsNotEmpty()
  publicacion: Publicacion;

  @Column({ name: 'modoCanal' })
  @IsString()
  @IsNotEmpty()
  modoCanal: string;

  @Column({ name: 'telefonoContacto' })
  @IsString()
  @IsNotEmpty()
  telefonoContacto: string;

  @Column({ name: 'estado' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @Column({ name: 'tipoDenuncia' })
  @IsString()
  @IsNotEmpty()
  tipoDenuncia: string;

  @Column({ name: 'descripcionHechos' })
  @IsString()
  @IsNotEmpty()
  descripcionHechos: string;

  @Column({ name: 'adjunto' })
  @IsString()
  @IsNotEmpty()
  adjunto: string;
}
