import { plainToInstance } from 'class-transformer';
import { IResult } from 'src/questions/models/questionsResponse.model';
import { QuestionResponseDto } from '../dto/questionRS.dto';

export default function QuestionConverter(
  questions: IResult[],
): QuestionResponseDto[] {
  for (const result of questions) {
    result.incorrect_answers.push(result.correct_answer);
    result.incorrect_answers.sort(() => Math.random() - 0.5);
  }

  return questions.map((question) =>
    plainToInstance(QuestionResponseDto, {
      category: question.category,
      type: question.type,
      difficulty: question.difficulty,
      question: question.question,
      correctAnswer: question.correct_answer,
      incorrectAnswers: question.incorrect_answers,
    }),
  );
}
