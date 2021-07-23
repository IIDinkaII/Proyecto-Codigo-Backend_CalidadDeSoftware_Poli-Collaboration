import { EstadoUsuario } from '../entities/estado-usuario.entity';
import { PerfilUsuario } from '../entities/pefil-usuario.entity';
import { UsuarioRol } from '../../entities/usuario-rol.entity';
import { Publicacion } from '../../publicaciones/entities/publicacion.entity';
import { Respuesta } from '../../publicaciones/preguntas/entities/respuesta.entity';
import { IsString, IsNumber, IsDate, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

export class CrearUsuarioDto {
 
  @IsString()
  @IsNotEmpty()
  readonly correo_institucional: string;
  @IsString()
  @IsNotEmpty()
  readonly nombres: string;
  @IsString()
  @IsNotEmpty()
  readonly apellidos: string;
  @IsDate()
  @IsNotEmpty()
  readonly fecha_nacimiento: Date;
  @IsString()
  @IsNotEmpty()
  readonly carrera: string;
  @IsString()
  @IsNotEmpty()
  readonly facultad: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;

}

export class ActualizarUsuarioDto extends PartialType(CrearUsuarioDto) {}
