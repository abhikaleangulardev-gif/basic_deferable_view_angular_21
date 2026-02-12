import { Component, OnInit } from '@angular/core';
import { Child1 } from '../child-1/child-1';

@Component({
  selector: 'app-child-2',
  imports: [],
  templateUrl: './child-2.html',
  styleUrl: './child-2.css',
})
export class Child2 extends Child1 {
  constructor() {
    super();
    this.myStudentObservable$.subscribe({
      next: (_resp: any) => {
        console.log(_resp);
      },
      error: (_error: Error) => {
        console.log(_error);
      }
    })
  }




}
