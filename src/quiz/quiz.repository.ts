import {readFile, writeFile} from 'fs/promises';
import {Injectable} from '@nestjs/common';

@Injectable()
export class QuizRepository{

    async findOne(id : string){
        const contents = await readFile('data.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];

    }

    async findAll(){
        const contents = await readFile('data.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }

   
}