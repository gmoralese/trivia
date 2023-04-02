import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions/questions.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Questions } from '../types/questions.type';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-questions-root',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent implements OnInit {
  public questions: Questions[] = [];
  public finished = false;
  public level = 'easy';
  public isLoading = true;
  public disableButton = false;
  public form: FormGroup;
  public score = 0;
  public errorOnLoading = false;

  constructor(
    private questionsService: QuestionsService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({});
  }

  public ngOnInit(): void {
    this.getQuestions();
  }

  public getQuestions(): void {
    this.finished = false;
    this.score = 0;
    this.isLoading = true;
    this.questionsService.getQuestions(this.level).subscribe(
      (data: Questions[]) => {
        this.questions = data;
        this.buildForm(this.questions);
        this.isLoading = false;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.errorOnLoading = true;
      }
    );
  }

  public buildForm(questions: Questions[]): void {
    this.form = this.fb.group({});
    for (const [index] of questions.entries()) {
      this.form.addControl(
        index.toString(),
        this.fb.control('', [Validators.required])
      );
    }
  }

  public checkPoints(option: string, index: number): void {
    this.form.patchValue({
      [index]: option,
    });
    this.disableButton = this.form.valid;
  }

  public handleFinish(): void {
    for (const [index, question] of this.questions.entries()) {
      if (this.form.value[index] === question.correctAnswer) {
        this.score = this.score + 2;
      } else {
        this.score = this.score - 2;
      }
    }
    this.finished = true;
  }
}
