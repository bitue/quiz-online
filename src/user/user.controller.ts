import { Controller, Get } from '@nestjs/common';
import {UserService} from './user.service'

@Controller('user')
export class UserController {
    constructor(public userService : UserService){
        
    }
    @Get()
    listAllUser(){
        return this.userService.findAll();
    }

}
