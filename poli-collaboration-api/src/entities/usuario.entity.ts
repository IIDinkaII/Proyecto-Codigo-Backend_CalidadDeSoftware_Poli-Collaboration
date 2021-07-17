import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { IsDate, IsEmail, IsNotEmpty, isString, IsString, isValidationOptions, Length, MinLength, validate } from 'class-validator';
import { EstadoUsuario } from './estado-usuario.entity';
import { UsuarioRol } from './usuario-rol.entity';
import { PerfilUsuario } from './pefil-usuario.entity';
import { Publicacion } from './publicacion.entity';
import { Respuesta } from './respuesta.entity';
//import { ValidationTypes } from 'class-validator';

@Entity('Usuario')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  idUsuario: number;

  @ManyToOne(() => EstadoUsuario, (estado) => estado.usuarios)
  @JoinColumn({ name: 'id_estado_usuario' })
  estado: EstadoUsuario;

  @OneToOne(() => PerfilUsuario)
  @JoinColumn({ name: 'id_perfil_usuario' })
  @IsNotEmpty()
  perfil: PerfilUsuario;

  @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.usuario)
  @IsNotEmpty()
  usuariosRol: UsuarioRol[];

  @OneToMany(() => Publicacion, (publicacion) => publicacion.usuario)
  @IsNotEmpty()
  publicaciones: Publicacion[];

  @OneToMany(() => Respuesta, (respuesta) => respuesta.usuario)
  @IsNotEmpty()
  respuestas: Respuesta[];

  @Column({ name: 'correo_institucional' })
  //@ValidationTypes.isValid(correoIn);
  @IsEmail()
  @IsNotEmpty()
  correoInstitucional: string;
  

  @Column({ name: 'nombres' })
  @Length(5, 55)
  @IsNotEmpty()
  @IsString()
  nombres: string;


  @Column({ name: 'apellidos' })
  @Length(5, 55)
  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @Column({ name: 'fecha_nacimiento' })
  @IsDate()
  @IsNotEmpty()
  fechaNacimiento: Date;

  @Column({ name: 'carrera' })
  @IsNotEmpty()
  @IsString()
  carrera: String;

  @Column({ name: 'facultad' })
  @Length(20,40)
  @IsNotEmpty()
  @IsString()
  facultad: String;

  @Column({ name: 'password' })
  @MinLength(8)
  @IsNotEmpty()
  @IsString()
  password: String;

  @Column({ name: 'fecha_creacion' })
  @IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;

  @Column({ name: 'ultima_actualizacion' })
  @IsDate()
  @IsNotEmpty()
  ultimaActualizacion: Date;
}
