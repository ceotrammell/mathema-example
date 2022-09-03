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
    return mathema.conversion.convert('inch', 'centimeter', 11);
  }
  conversionLength() {
    return mathema.conversion.convert('sq inch', 'sq centimeter', 16);
  }
  conversionMass() {
    return mathema.conversion.convert('ounce', 'gram', 5);
  }
  conversionTemp() {
    return mathema.conversion.convert('celsius', 'fahrenheit', 23);
  }
  conversionVolume() {
    return mathema.conversion.convert('teaspoon', 'milliliter', 3);
  }
}
