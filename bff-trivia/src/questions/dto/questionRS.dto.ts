import { IsNotEmpty, IsString } from 'class-validator';

export class QuestionResponseDto {
  @IsNotEmpty()
  @IsString()
  category: string;
  @IsNotEmpty()
  @IsString()
  type: string;
  @IsString()
  @IsNotEmpty()
  difficulty: string;
  @IsString()
  @IsNotEmpty()
  question: string;
  @IsString()
  @IsNotEmpty()
  correctAnswer: string;
  @IsString()
  @IsNotEmpty()
  incorrectAnswers: string[];
}
