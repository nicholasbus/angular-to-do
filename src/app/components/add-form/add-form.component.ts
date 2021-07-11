import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  title: string = '';
  date: string = '';
  important: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
