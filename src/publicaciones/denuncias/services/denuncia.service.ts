import { Injectable } from '@nestjs/common';
import {Denuncia} from '../entities/denuncia.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';
//import * as bcrypt from 'bcrypt';
import {CrearDenunciaDTO, ActualizarDenunciaDTO, ActualizarEstadoDenunciaDTO} from '../dtos/denuncia.dto'
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class DenunciaService {
    constructor(
        @InjectRepository(Denuncia) private denunciaRepo: Repository<Denuncia>,
        @InjectRepository(Usuario) private usuarioRepo: Repository<Usuario>,
      ) {}
    
    findAll() {
        return this.denunciaRepo.find();
    }

    async findOne(id: number) {
        const denuncia = await this.denunciaRepo.findOne(id);
        if (!denuncia) {
          throw new NotFoundError(`Complaint #${id} not found`);
        }
        return denuncia;
      }

    async create(body: CrearDenunciaDTO) {
        let nuevaDenuncia = this.denunciaRepo.create(body);
        if(body.idUsuario){
          let usuario = await this.usuarioRepo.findOne(body.idUsuario)
          if(usuario){
             nuevaDenuncia.usuario = usuario;
          }
        }
        return this.denunciaRepo.save(nuevaDenuncia);
    }

    async update(id: number, body: ActualizarDenunciaDTO) {
        const denuncia = await this.denunciaRepo.findOne(id);
        this.denunciaRepo.merge(denuncia, body);
        return this.denunciaRepo.save(denuncia);
    }

    async updateState(id: number, body: ActualizarEstadoDenunciaDTO){
      const denuncia = await this.denunciaRepo.findOne(id);
      this.denunciaRepo.merge(denuncia, body);
      return this.denunciaRepo.save(denuncia);
  }

}
