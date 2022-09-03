import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicsComponent } from './components/basics/basics.component';
import { GeometryComponent } from './components/geometry/geometry.component';
import { AlgebraArithmeticComponent } from './components/algebra/algebra-arithmetic/algebra-arithmetic.component';
import { AlgebraComponent } from './components/algebra/algebra.component';
import { DiscreteComponent } from './components/discrete/discrete.component';
import { ConversionComponent } from './components/conversion/conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    GeometryComponent,
    AlgebraComponent,
    AlgebraArithmeticComponent,
    DiscreteComponent,
    ConversionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
