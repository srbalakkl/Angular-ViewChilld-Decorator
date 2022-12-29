import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PaneComponent } from './pane/pane.component';
import { UsingDirectiveComponent } from './using-directive/using-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PaneComponent,
    UsingDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
