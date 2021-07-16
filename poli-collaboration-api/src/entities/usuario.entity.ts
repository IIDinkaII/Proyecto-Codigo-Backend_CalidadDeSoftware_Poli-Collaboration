import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { IsDate, IsEmail, IsNotEmpty, Length } from 'class-validator';
import { EstadoUsuario } from './estado-usuario.entity';
import { UsuarioRol } from './usuario-rol.entity';
import { PerfilUsuario } from './pefil-usuario.entity';
import { Publicacion } from './publicacion.entity';
import { Respuesta } from './respuesta.entity';

@Entity('Usuario')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  idUsuario: number;

  @ManyToOne(() => EstadoUsuario, (estado) => estado.usuarios)
  @JoinColumn({ name: 'id_estado_usuario' })
  estado: EstadoUsuario;

  @OneToOne(() => PerfilUsuario)
  @JoinColumn({ name: 'id_perfil_usuario' })
  perfil: PerfilUsuario;

  @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.usuario)
  usuariosRol: UsuarioRol[];

  @OneToMany(() => Publicacion, (publicacion) => publicacion.usuario)
  publicaciones: Publicacion[];

  @OneToMany(() => Respuesta, (respuesta) => respuesta.usuario)
  respuestas: Respuesta[];

  @Column({ name: 'correo_institucional' })
  @IsEmail()
  @IsNotEmpty()
  correoInstitucional: string;

  @Column({ name: 'nombres' })
  @Length(5, 55)
  @IsNotEmpty()
  nombres: string;

  @Column({ name: 'apellidos' })
  apellidos: string;

  @Column({ name: 'fecha_nacimiento' })
  fechaNacimiento: Date;

  @Column({ name: 'carrera' })
  carrera: String;

  @Column({ name: 'facultad' })
  facultad: String;

  @Column({ name: 'password' })
  password: String;

  @Column({ name: 'fecha_creacion' })
  @IsDate()
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  @IsDate()
  ultimaActualizacion: Date;
}
