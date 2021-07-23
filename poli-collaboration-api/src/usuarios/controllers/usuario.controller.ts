import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

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
  create(@Body() body: any) {
    return this._httpUserService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this._httpUserService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this._httpUserService.delete(id);
  }
}
