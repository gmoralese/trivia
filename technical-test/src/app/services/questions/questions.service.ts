import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Questions } from 'src/app/types/questions.type';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private httpClient: HttpClient) {}

  public getQuestions(level: string): Observable<Questions[]> {
    return this.httpClient.get<Questions[]>(
      `${environment.BFF_QUESTIONS}/questions?difficulty=${level}`
    );
  }
}
