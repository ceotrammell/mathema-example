import { Component } from '@angular/core';
import * as mathema from 'mathema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mathema-example';
  arr1 = [1,3,5];
  arr2 = [2,6,10];
  arr_in_arr = [1,[2,[3,4]],3,5];
  obj = [{ val: 1},{ val: 2}]

  ngOnInit() {}

  add() {
    return mathema.basics.add.simple(-2,1);
  }

  addTwoArrays() {
    return mathema.basics.add.twoArrays(this.arr1,this.arr2);
  }

  addMultiD(arr:any) {
    return mathema.basics.add.multiD(arr);
  }

  subtract() {
    return mathema.basics.subtract.simple(-2,-1);
  }

  subtractTwoArrays() {
    return mathema.basics.subtract.twoArrays(this.arr1,this.arr2);
  }

  subtractMultiD(arr:any) {
    return mathema.basics.subtract.multiD(arr);
  }

  multiply() {
    return mathema.basics.multiply.simple(-2,5);
  }

  multiplyTwoArrays() {
    return mathema.basics.multiply.twoArrays(this.arr1,this.arr2);
  }

  multiplyMultiD(arr:any) {
    return mathema.basics.multiply.multiD(arr);
  }

  divide() {
    return mathema.basics.divide.simple(-2,0.5);
  }

  divideTwoArrays() {
    return mathema.basics.divide.twoArrays(this.arr1,this.arr2);
  }

  divideMultiD(arr:any) {
    return mathema.basics.divide.multiD(arr);
  }

}
