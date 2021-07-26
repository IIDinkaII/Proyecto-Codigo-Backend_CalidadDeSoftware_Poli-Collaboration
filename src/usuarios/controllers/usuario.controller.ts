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
import { UsuarioService } from '../services/usuario.service';
import { CrearUsuarioDto, ActualizarUsuarioDto } from '../dtos/usuario.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/roles.model';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('usuario')
@Controller('api/usuario')
export class UsuarioController {
  constructor(private _httpUserService: UsuarioService) {}

  @Roles(Role.ADMIN)
  @Get()
  @ApiOperation({ summary: 'Lista de usuarios' })
  getAll() {
    return this._httpUserService.findAll();
  }

  @Public()
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
