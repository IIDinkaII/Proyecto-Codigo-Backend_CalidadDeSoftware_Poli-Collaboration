import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Revision } from '../../entities/revision.entity';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';


@Entity({ name: 'Reporte_Denuncia' })
export class ReporteDenuncia {
  @PrimaryGeneratedColumn({ name: 'id_reporte_denuncia' })
  @IsNotEmpty()
  @IsNumber()
  idReporteDenuncia: number;

  @Column({ name: 'id_denuncia' })
  @IsNotEmpty()
  @IsString()
  idDenuncia: string;

  @OneToOne(() => Revision)
  @JoinColumn({ name: 'id_revision' })
  @IsNotEmpty()
  @IsNumber()
  idRevision: number;

  @Column({ name: 'acciones_tomadas' })
  @IsNotEmpty()
  @IsString()
  accionesTomadas: string;

  @Column({ name: 'responsables' })
  @IsNotEmpty()
  @IsString()
  responsables: string;

  @Column({ name: 'evidencia' })
  @IsNotEmpty()
  @IsString()
  evidencia: string;

  @Column({ name: 'fecha_creacion' })
  @IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  @IsDate()
  @IsNotEmpty()
  ultimaActualizacion: Date;
}
