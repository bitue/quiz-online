import {QuizRepository} from './quiz.repository'
import {Injectable} from '@nestjs/common';

@Injectable()
export class QuizService {
    
    constructor(public quizRepo : QuizRepository){
        
    }

    findOne(id : string){
        return this.quizRepo.findOne(id);
    }
    findAll(){
        return this.quizRepo.findAll();
    }
  
}
