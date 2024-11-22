import {readFile, writeFile} from 'fs/promises';
import {Injectable} from '@nestjs/common';

@Injectable()
export class UserRepository{


    async findAll(){
        const contents = await readFile('user.json', 'utf8');
        const users = JSON.parse(contents);
        return users;
    }

   
}