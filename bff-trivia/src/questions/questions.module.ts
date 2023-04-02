import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { LevelsModule } from '../levels/leves.module';

@Module({
  imports: [LevelsModule, HttpModule],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
