import { Component } from '@angular/core';

@Component({
  selector: 'app-results-root',
  templateUrl: './results.component.html',
})
export class ResultsComponent {
  scores = [
    { place: 1, name: 'Alice', score: 100, time: '00:45' },
    { place: 2, name: 'Bob', score: 90, time: '00:48' },
    { place: 3, name: 'Charlie', score: 85, time: '00:50' },
    { place: 4, name: 'David', score: 80, time: '00:55' },
    { place: 5, name: 'Eva', score: 75, time: '00:58' },
    { place: 6, name: 'Frank', score: 70, time: '01:02' },
    { place: 7, name: 'Grace', score: 65, time: '01:05' },
    { place: 8, name: 'Hannah', score: 60, time: '01:10' },
    { place: 9, name: 'Ian', score: 55, time: '01:15' },
    { place: 10, name: 'Jack', score: 50, time: '01:20' },
  ];
}
