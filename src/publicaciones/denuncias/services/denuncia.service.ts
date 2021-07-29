import { Injectable } from '@nestjs/common';
import {Denuncia} from '../entities/denuncia.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import {CrearDenunciaDTO} from '../dtos/crearDenuncia.dto'

@Injectable()
export class DenunciaService {
    constructor(
        @InjectRepository(Denuncia) private userRepo: Repository<Denuncia>,
      ) {}
    
    findAll() {
        return this.userRepo.find();
    }

    async create(body: CrearDenunciaDTO) {
        const denuncia = this.userRepo.create(body); // hace un match
        return this.userRepo.save(denuncia);
    }


}
