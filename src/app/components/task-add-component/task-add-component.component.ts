import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task-add-component',
  templateUrl: './task-add-component.component.html',
  styleUrls: ['./task-add-component.component.scss']
})
export class TaskAddComponentComponent implements OnInit {

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  @Output() myClick = new EventEmitter();

  constructor(private data: DataService) { }

  ngOnInit(): void {}

  dataInput:string = '';

  /* Save input value when user keyup */
  input:string = '';

  saveData(data:any) {
    this.input = data.target.value;
  }

  /* Function call name event export to parent component */
  callEvent() {
    this.myClick.emit(this.input);
  }

  /* Create Message and send to parent component for add to List Task */
  createMessage(message: any) {
    if(message.length > 0) {
      this.data.changeMessage(message);
    }
  }
}

