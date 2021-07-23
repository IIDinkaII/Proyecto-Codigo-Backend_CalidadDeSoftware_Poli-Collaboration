import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import {CrearUsuarioDto} from '../dtos/usuario.dtos'
import {ActualizarUsuarioDto} from '../dtos/usuario.dtos'

@Controller('api/user')
export class UsuarioController {
  constructor(private _httpUserService: UsuarioService) {}

  @Get()
  getAll() {
    return this._httpUserService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this._httpUserService.findOne(id);
  }

  @Post()
  create(@Body() body: CrearUsuarioDto) {
    return this._httpUserService.create(body);
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
