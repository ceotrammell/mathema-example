import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebraArithmeticComponent } from './algebra-arithmetic.component';

describe('AlgebraArithmeticComponent', () => {
  let component: AlgebraArithmeticComponent;
  let fixture: ComponentFixture<AlgebraArithmeticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgebraArithmeticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgebraArithmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
