import { Component } from '@angular/core';
import questionsMock from "../../assets/questions.mock.json";

@Component({
  selector: 'app-questions-root',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent {
  public questions: any = questionsMock.results;
}