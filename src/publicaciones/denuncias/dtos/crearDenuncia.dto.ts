import{
    IsString,
    IsNotEmpty,
    IsOptional,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CrearDenunciaDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly modoCanal: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly telefonoContacto: string;
    @IsOptional()
    @IsNotEmpty()
    @ApiProperty()
    readonly estado: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly tipoDenuncia: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly descripcionHechos: string;
    @IsOptional()
    @ApiProperty()
    readonly adjunto: string;
}
