import {UserRepository} from './user.repository'
import {Injectable} from '@nestjs/common';

@Injectable()
export class UserService {
    
    constructor(public userRepo : UserRepository){
        
    }

    findAll(){
        return this.userRepo.findAll();
    }
  
}

