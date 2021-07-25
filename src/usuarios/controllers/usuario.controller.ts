import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { CrearUsuarioDto, ActualizarUsuarioDto } from '../dtos/usuario.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';

@ApiTags('usuario')
@Controller('api/usuario')
export class UsuarioController {
  constructor(private _httpUserService: UsuarioService) {}

  @Get()
  @ApiOperation({ summary: 'Lista de usuarios' })
  getAll() {
    return this._httpUserService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this._httpUserService.findOne(id);
  }

  @Post()
  async create(@Body() usuario: CrearUsuarioDto) {
    return this._httpUserService.create(usuario);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: ActualizarUsuarioDto) {
    return this._httpUserService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this._httpUserService.delete(id);
  }
}
