import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Revision } from './revision.entity';

@Entity({ name: 'Reporte_Denuncia' })
export class ReporteDenuncia {
  @PrimaryGeneratedColumn({ name: 'id_reporte_denuncia' })
  idReporteDenuncia: number;

  @Column({ name: 'id_denuncia' })
  idDenuncia: string;

  @OneToOne(() => Revision)
  @JoinColumn({ name: 'id_revision' })
  idRevision: number;

  @Column({ name: 'acciones_tomadas' })
  accionesTomadas: string;

  @Column({ name: 'responsables' })
  responsables: string;

  @Column({ name: 'evidencia' })
  evidencia: string;

  @Column({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  ultimaActualizacion: Date;
}
