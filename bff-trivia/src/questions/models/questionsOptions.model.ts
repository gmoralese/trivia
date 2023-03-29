import { IsEnum, IsNotEmpty } from 'class-validator';

export enum DifficultyEnum {
  'easy' = 'easy',
  'medium' = 'medium',
  'hard' = 'hard',
  'inferno' = 'inferno',
}

export class QuestionsOptions {
  @IsEnum(DifficultyEnum)
  @IsNotEmpty()
  readonly difficulty: DifficultyEnum;
}
