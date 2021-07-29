import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/roles.model';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import {DenunciaService} from '../services/denuncia.service'
import {CrearDenunciaDTO} from '../dtos/crearDenuncia.dto'

@Controller('denuncia')
export class DenunciaController {
    constructor(private _httpDenunciaService: DenunciaService) {}

    @Public()
    @Post()
    @ApiOperation({ summary: 'Crear un usuario' })
    async create(@Body() denuncia: CrearDenunciaDTO) {
      let nuevaDenuncia = denuncia
      return this._httpDenunciaService.create(nuevaDenuncia);
    }  

}
