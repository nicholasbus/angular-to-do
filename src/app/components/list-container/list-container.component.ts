import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {
  todos: Todo[] = [];


  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Feed Cat',
        date: 'July 10th 3:00PM',
        important: false
      },
      {
        id: 2,
        title: 'Make Ramen',
        date: 'July 11th (When Ramen Arrives)',
        important: false
      },
      {
        id: 3,
        title: 'Fellowship Meet and Greet',
        date: 'July 12th 7:30AM',
        important: true
      }
    ]
  }

}
