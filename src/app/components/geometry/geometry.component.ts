import { Component, OnInit } from '@angular/core';
import * as mathema from 'mathema';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css']
})
export class GeometryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  circleArea() {
    return mathema.geometry.circle.area(2);
  }

  circleCircumference() {
    return mathema.geometry.circle.circumference(2);
  }
  
  circleDiameter() {
    return mathema.geometry.circle.diameter(2);
  }

  cylinderDiameter() {
    return mathema.geometry.cylinder.diameter(2,6);
  }

  cylinderSurfaceArea() {
    return mathema.geometry.cylinder.surfaceArea(2,4);
  }
  
  cylinderVolume() {
    return mathema.geometry.cylinder.volume(2,1);
  }

  rectangleArea() {
    return mathema.geometry.rectangle.area(2,6);
  }

  rectanglePerimeter() {
    return mathema.geometry.rectangle.perimeter(2,5);
  }

  sphereSurfaceArea() {
    return mathema.geometry.sphere.surfaceArea(2);
  }

  sphereVolume() {
    return mathema.geometry.sphere.volume(2);
  }

  squareArea() {
    return mathema.geometry.square.area(2);
  }

  squarePerimeter() {
    return mathema.geometry.square.perimeter(2);
  }

  triangleAreaASA() {
    return mathema.geometry.triangle.area.asa(41,6.4,85);
  }

  triangleAreaHeight() {
    return mathema.geometry.triangle.area.height(2,4);
  }

  triangleAreaSAS() {
    return mathema.geometry.triangle.area.sas(6.4,50,5.6);
  }

  triangleAreaSSS() {
    return mathema.geometry.triangle.area.sss(3,4,5);
  }

  trianglePerimeter() {
    return mathema.geometry.triangle.perimeter(2,4,5);
  }

}
