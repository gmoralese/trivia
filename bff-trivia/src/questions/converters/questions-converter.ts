import { IResult } from 'src/questions/models/questionsResponse.model';

export default function QuestionConverter(questions: IResult[]): IResult[] {
  for (const result of questions) {
    result.incorrect_answers.push(result.correct_answer);
    result.incorrect_answers.sort(() => Math.random() - 0.5);
  }

  return questions;
}
