import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { QuestionsOptions } from 'src/questions/models/questionsOptions.model';
import { IResult } from 'src/questions/models/questionsResponse.model';
import { levels } from './mocks/levels';
import { ILevelMode } from './models/level.model';
import QuestionConverter from 'src/questions/converters/questions-converter';

@Injectable()
export class QuestionsService {
  constructor(private readonly httpService: HttpService) {}

  public async getQuestions(data: QuestionsOptions): Promise<IResult[]> {
    return this.getQuestionsBy(levels[data?.difficulty]);
  }

  public async getQuestionsBy(modeSelected: ILevelMode[]) {
    const resolvedPromises: IResult[] = await Promise.all(
      modeSelected.map(async (mode: ILevelMode) => {
        const response = await lastValueFrom(
          this.httpService.get(
            `https://opentdb.com/api.php?amount=${mode.amount}&difficulty=${mode.difficulty}`,
          ),
        );

        return response?.data?.results;
      }),
    );

    return QuestionConverter(resolvedPromises.flat());
  }
}
