import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LoginService } from '../services/login.service';

@Controller('api/login')
export class LoginController {

    constructor(
        private _httpUserService : LoginService
    ){}

    @Get()
    getAll(){
        return this._httpUserService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id:number){
        return this._httpUserService.findOne(id);
    }

    @Post()
    create(@Body() body:any){
        return this._httpUserService.create(body);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body:any){
        return this._httpUserService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this._httpUserService.delete(id)
    }

    
}
