import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { QuestionsOptions } from 'src/questions/models/questionsOptions.model';
import { IResult } from 'src/questions/models/questionsResponse.model';
import { ILevelMode } from './models/level.model';
import QuestionConverter from 'src/questions/converters/questions-converter';
import { QuestionResponseDto } from './dto/questionRS.dto';
import { LevelsService } from 'src/levels/levels.service';
import { IConfig } from 'src/levels/models/config.model';

@Injectable()
export class QuestionsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly levelsService: LevelsService,
  ) {}

  public async getQuestions(
    data: QuestionsOptions,
  ): Promise<QuestionResponseDto[]> {
    const config = await this.getLevelConfig();
    return this.getQuestionsBy(config[data?.difficulty]);
  }

  public async getQuestionsBy(modeSelected: ILevelMode[]) {
    const resolvedPromises: IResult[] = await Promise.all(
      modeSelected.map(async (mode: ILevelMode) => {
        const response = await lastValueFrom(
          this.httpService.get(
            `${process.env.API_URL}?amount=${mode.amount}&difficulty=${mode.difficulty}`,
          ),
        );

        return response?.data?.results;
      }),
    );

    return QuestionConverter(resolvedPromises.flat());
  }

  private async getLevelConfig(): Promise<IConfig> {
    const response = await this.levelsService.getLevelsConfig();
    return response.config;
  }
}
