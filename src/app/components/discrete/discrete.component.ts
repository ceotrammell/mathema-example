import { Component, OnInit } from '@angular/core';

 import * as mathema from 'mathema';

@Component({
  selector: 'app-discrete',
  templateUrl: './discrete.component.html',
  styleUrls: ['./discrete.component.css']
})
export class DiscreteComponent implements OnInit {

  arr1 = [12, 46, 512, 2056];
  arr_in_arr = [12,[2,[46,4]],3,512];

  constructor() { }

  ngOnInit(): void {
  }


  gcdpair() {
    return mathema.discrete.gcd.pair(80, 44);
  }

  gcdarr(arr:any) {
    return mathema.discrete.gcd.arr(arr);
  }

}