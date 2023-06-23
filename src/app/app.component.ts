import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {PaneComponent} from "./pane/pane.component";
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'ViewChildDecorator';
  @ViewChild(PaneComponent)
  set pane(v: PaneComponent) {
    setTimeout(() => {
      // Here I'm getting the changed value from the PaneComponent.
      this.selectedPane = v.id;
    }, 0);
  }

  selectedPane: string = '';
  shouldShow = true;

  toggle() {
    this.shouldShow = !this.shouldShow;
  }

//   ****** Accessing HTML Element using @ViewChild Decorator ******
//   @ViewChild('headline') headlinevalue!:ElementRef;
  /* Since we are accessing html element,
    I'm declaring its type as ElementRef. */

  @ViewChild(ChildComponent) getchildVariable!:ChildComponent;
  //here I'm referencing the ChildComponent to the CurrentComponent
  @ViewChildren(ChildComponent) getViewChildren!:QueryList<ChildComponent>

  ngOnInit() {
    // note: the below will give error
    // console.log(`Calling from ngOnInit = ${this.getchildVariable.childVariable}`)
  }

  ngAfterViewInit() {
    /*note: this will only available only after the view is rendered / initialized in the DOM
    * So this will only work on ngAfterViewInit() lifecycle hook NOT on ngOnInit. */
    /*By default, if u use it on ngOnInit it'll show undefined error*/

    this.getchildVariable.childVariable = 'Changed Variable';
    console.log(this.getchildVariable.childVariable)
    console.log(this.getchildVariable.myname)
    console.log(`Getting value by using the  @ViewChildren is ${this.getViewChildren.length}`)
    console.log('get view children =',this.getViewChildren.get(0)?.childVariable)
  }

}

