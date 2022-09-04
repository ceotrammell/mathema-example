import { Component, OnInit } from '@angular/core';

import * as mathema from 'mathema';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  conversionArea() {
    return mathema.conversion.convert('sq inch', 'sq centimeter', 16);
  }
  conversionLength() {
    // example of short hand conversion types
    return mathema.conversion.convert('in', 'cm', 11);
  }
  conversionMass() {
    return mathema.conversion.convert('ounce', 'gram', 5);
  }
  conversionTemp() {
    // example of short hand conversion types
    return mathema.conversion.convert('c', 'f', 23);
  }
  conversionVolume() {
    return mathema.conversion.convert('teaspoon', 'milliliter', 3);
  }
}
