import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.sass']
})
export class PaneComponent implements OnInit,AfterViewInit {

  @Input() id!: string;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(`Pane Components ID = ${this.id}`);
    // this.id = '1000';
  }

}
