import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { QuestionsOptions } from 'src/questions/models/questionsOptions.model';
import { QuestionResponseDto } from './dto/questionRS.dto';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  public getQuestions(
    @Query(
      new ValidationPipe({
        transform: true,
      }),
    )
    query: QuestionsOptions,
  ): Promise<QuestionResponseDto[]> {
    return this.questionsService.getQuestions(query);
  }
}
