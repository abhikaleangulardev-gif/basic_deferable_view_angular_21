import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public students = [
    { id: 1, name: "Rahul", marks: 80 },
    { id: 2, name: "Sneha", marks: 90 },
    { id: 3, name: "Amit", marks: 75 }
  ];

  myStudentObservable$: BehaviorSubject<any> = new BehaviorSubject('initial getting student data in child-1 component');

  sendStudentList() {
    this.myStudentObservable$.next(this.students);
  }
}
