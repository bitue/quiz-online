import { Controller, Get } from '@nestjs/common';
import {QuizService} from './quiz.service'

@Controller('quiz')
export class QuizController {
    constructor(public quizService : QuizService){
        
    }
    @Get()
    listAllQuiz(){
        return this.quizService.findAll();
    }

}
