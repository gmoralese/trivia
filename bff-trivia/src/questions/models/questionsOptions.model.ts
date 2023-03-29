import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class QuestionsOptions {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  readonly difficulty: 'easy' | 'medium' | 'hard' | 'inferno';
}
