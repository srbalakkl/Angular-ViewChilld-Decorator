import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  childVariable:string = 'Initial Value';
  constructor() { }

  ngOnInit(): void {
  }

  mtd(){
    console.log(`child component's function....`);
    return 'child component function'
  }

}
