import { EstadoUsuario } from '../entities/estado-usuario.entity';
import { PerfilUsuario } from '../entities/pefil-usuario.entity';
import { UsuarioRol } from '../../entities/usuario-rol.entity';
import { Publicacion } from '../../publicaciones/entities/publicacion.entity';
import { Respuesta } from '../../publicaciones/preguntas/entities/respuesta.entity';
import {
  IsString,
  IsNumber,
  IsDate,
  IsNotEmpty,
  IsPositive,
  IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

export class CrearUsuarioDto {
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly idUsuario: number;
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly idEstadoUsuario: number;
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly idPerfilUsuario: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly correo_institucional: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nombres: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly apellidos: string;
  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly fecha_nacimiento: Date;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly carrera: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly facultad: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;
}

export class ActualizarUsuarioDto extends PartialType(CrearUsuarioDto) {}
