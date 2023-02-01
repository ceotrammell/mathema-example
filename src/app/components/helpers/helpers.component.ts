import { Component, OnInit } from '@angular/core';
import * as mathema from 'mathema';

@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.css']
})
export class HelpersComponent implements OnInit {

  arr_in_arr = [12,[2,[46,4]],3,512];
  arr_in_arr_str = '[12,[2,[46,4]],3,512]';
  str = 'example';
  inject = 21 + 'apples';

  constructor() { }

  ngOnInit(): void {
  }

  factorialize() {
    return mathema.helpers.factorialize(5);
  }

  flatten() {
    return mathema.helpers.flatten(this.arr_in_arr);
  }

  sliceBuilder() {
    return mathema.helpers.sliceBuilder(this.str, 0, this.inject);
  }

  sqrt() {
    return mathema.helpers.sqrt(5);
  }

}
