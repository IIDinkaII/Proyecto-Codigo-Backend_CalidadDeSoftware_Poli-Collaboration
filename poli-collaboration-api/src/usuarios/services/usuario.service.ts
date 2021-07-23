import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import {CrearUsuarioDto} from '../dtos/usuario.dtos'
import {ActualizarUsuarioDto} from '../dtos/usuario.dtos'
@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private userRepo: Repository<Usuario>,
  ) {}

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    const usuario = this.userRepo.findOne(id);
    if (!usuario) {
      throw new NotFoundError(`Product #${id} not found`);
    }
    return usuario;
  }

  create(body: CrearUsuarioDto) {
    const newUser = this.userRepo.create(body); // hace un match
    return this.userRepo.save(newUser);
  }

  async update(id: number, body: ActualizarUsuarioDto) {
    const user = await this.userRepo.findOne(id);
    this.userRepo.merge(user, body);
    return this.userRepo.save(user);
  }

  async delete(id: number) {
    await this.userRepo.delete(id);
    return true;
  }
}