import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  childVariable:string = 'Initial Value';
  childVariable2:string = 'Initial Value 2'
  myname:string = 'bala';

  constructor() { }

  ngOnInit(): void {
  }

}
