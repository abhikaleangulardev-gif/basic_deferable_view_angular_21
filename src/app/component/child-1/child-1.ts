import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child-1',
  imports: [],
  templateUrl: './child-1.html',
  styleUrl: './child-1.css',
})
export class Child1 implements OnInit{
  public students = [
    { id: 1, name: "Rahul", marks: 80 },
    { id: 2, name: "Sneha", marks: 90 },
    { id: 3, name: "Amit", marks: 75 }
  ];

  myStudentObservable$: BehaviorSubject<any> = new BehaviorSubject('initial getting student data in child-1 componenet');

  ngOnInit(): void {
    this.myStudentObservable$.next(this.students);
  }

  // onClick(){
  //   this.myStudentObservable$.next(this.students);
  // }
}
