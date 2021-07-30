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
import {CrearDenunciaDTO, ActualizarDenunciaDTO} from '../dtos/denuncia.dto'

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('usuario')
@Controller('api/denuncia')
export class DenunciaController {
    constructor(private _httpDenunciaService: DenunciaService) {}


    @Roles(Role.MODERADOR)
    @Get()
    @ApiOperation({ summary: 'Lista de usuarios de la aplicación.' })
    getAll() {
      return this._httpDenunciaService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener una denuncia según su Id' })
    getOne(@Param('id', ParseIntPipe) id: number) {
      return this._httpDenunciaService.findOne(id);
    }

    @Public()
    @Post()
    @ApiOperation({ summary: 'Crear una denuncia' })
    async create(@Body() denuncia: CrearDenunciaDTO) {
      let nuevaDenuncia = denuncia
      return this._httpDenunciaService.create(nuevaDenuncia);
    }  

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar una denuncia' })
    update(@Param('id') id: number, @Body() body: ActualizarDenunciaDTO) {
      return this._httpDenunciaService.update(id, body);
    }


}
