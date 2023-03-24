import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as mathema from 'mathema';

@Component({
  selector: 'app-algebra-arithmetic',
  templateUrl: './algebra-arithmetic.component.html',
  styleUrls: ['./algebra-arithmetic.component.css'],
})
export class AlgebraArithmeticComponent implements OnInit {

  arr1 = [12, 46, 512, 2056];
  arr_in_arr = [12,[2,[46,4]],3,512];

  constructor() { }

  ngOnInit(): void {
  }

  lcmarr(arr:any) {
    return mathema.algebra.arithmetic.lcm.arr(arr);
  }

  lcmpair() {
    return mathema.algebra.arithmetic.lcm.pair(25, 155);
  }

  gcdpair() {
    return mathema.algebra.arithmetic.gcd.pair(80, 44);
  }

  gcdarr(arr:any) {
    return mathema.algebra.arithmetic.gcd.arr(arr);
  }
}
