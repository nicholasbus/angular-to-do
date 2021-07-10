import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {
    id: 1,
    title: 'Feed Cat',
    date: 'July 10th 3:00PM',
    important: false
  }


  constructor() { }

  ngOnInit(): void {
  }

}
