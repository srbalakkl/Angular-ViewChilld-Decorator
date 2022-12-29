import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {PaneComponent} from "./pane/pane.component";
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit{
  title = 'untitled4';
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
  @ViewChild('headline') headlinevalue!:ElementRef;
  /* Since we are accessing html element,
    I'm declaring its type as ElementRef. */

  @ViewChild(ChildComponent) getchildVariable!:ChildComponent;
  //here I'm referencing the ChildComponent to the CurrentComponent

  ngAfterViewInit() {
    /*note: this will only available only after the view is rendered / initialized in the DOM
    * So this will only work on ngAfterViewInit() lifecycle hook NOT on ngOnInit. */

    /*By default, if u use it on ngOnInit it'll show undefined error*/
    console.log(`The Element Ref Value == ${this.headlinevalue.nativeElement.innerHTML}`)
    this.getchildVariable.childVariable = 'Changed Variable';
    console.log(this.getchildVariable.childVariable)

  }

}
