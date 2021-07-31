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
import {CrearDenunciaDTO, ActualizarDenunciaDTO, ActualizarEstadoDenunciaDTO} from '../dtos/denuncia.dto'

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('denuncia')
@Controller('api/denuncia')
export class DenunciaController {
    constructor(private _httpDenunciaService: DenunciaService) {}


    @Roles(Role.MODERADOR)
    @Get()
    @ApiOperation({ summary: 'Lista de usuarios de la aplicación.' })
    async getAll(){
      let denunciasObtenidas = await this._httpDenunciaService.findAll();
      let denunciasMostradas = denunciasObtenidas.map((denuncia) => {
        if (denuncia.modoCanal === 'No confidencial') {
          return {
            ...denuncia,
            //usuario: `${denuncia.usuario.nombres} ${denuncia.usuario.apellidos}`,
            usuario: `${denuncia.usuario}`,
          };
        }else {
          return denuncia;
        }
      });
      console.log(denunciasMostradas)
      return denunciasMostradas;
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener una denuncia según su Id' })
    getOne(@Param('id', ParseIntPipe) id: number) {
      return this._httpDenunciaService.findOne(id);
    }

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

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar estado de una denuncia' })
    updateState(@Param('updateState') id: number, @Body() body: ActualizarEstadoDenunciaDTO) {
      return this._httpDenunciaService.updateState(id, body);

    }
}
