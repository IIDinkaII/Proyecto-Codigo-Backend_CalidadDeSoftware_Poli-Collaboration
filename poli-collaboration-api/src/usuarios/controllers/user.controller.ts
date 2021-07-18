import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';


@Controller('api/user')
export class UserController {

    constructor(
        private _httpUserService : UserService
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
