import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicsComponent } from './components/basics/basics.component';
import { GeometryComponent } from './components/geometry/geometry.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    GeometryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
