import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/usuario.entity';

@Injectable()
export class LoginService {

    constructor(
        @InjectRepository(Usuario) private userRepo: Repository<Usuario>
    ){}

    findAll(){
        return this.userRepo.find()
    }

    findOne(id:number){
        return this.userRepo.findOne(id);
    }

    create(body: any){
        const newUser = this.userRepo.create(body) // hace un match
        return this.userRepo.save(newUser)
    }

    async update(id: number, body:any){
        const user = await this.userRepo.findOne(id);
        this.userRepo.merge(user, body);
        return this.userRepo.save(user)
    }

    async delete(id:number){
        await this.userRepo.delete(id)
        return true;
    }
}