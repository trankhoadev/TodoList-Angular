import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.scss'],
})

export class TaskListComponentComponent implements OnInit {

  message:string = '';

  text:string = 'ADD';
  dataInput:string = '';
  
  arrTask = [
    {
      id : 'data_1',
      task : 'Get Up'
    },
    {
      id : 'data_2',
      task : 'Brush your teeth'
    },
    {
      id : 'data_3',
      task : 'Have Breakfast'
    }
  ]

  length:number = this.arrTask.length + 1;

  check:boolean = false;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  showHideFormAdd() {
    document.getElementById('btnAdd')
    if(this.check) {
      this.check = false;
      this.text = 'Add';
    } else {
      this.check = true;
      this.text = 'Remove';
    }
  }

  /* Push data in input to Array Task */
  pushToArray(value: any) {
    this.dataInput = value;
    if(this.dataInput.length) {
      this.arrTask.push({
        id : 'data_' + this.length,
        task : this.dataInput
      })
    }
    else {
      alert('Please enter full data!')
    }
  }

  /* Remove task */
  index:number = 0;
  removeTask(data:any) {
    this.index = this.arrTask.map( x => {
      console.log(x.id);
      return x.id;
    }).indexOf(data.target.id);

    this.arrTask.splice(this.index, 1);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.dataInput);
  }
}



