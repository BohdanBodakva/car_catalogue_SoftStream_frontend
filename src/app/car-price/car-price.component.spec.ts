import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPriceComponent } from './car-price.component';

describe('CarPriceComponent', () => {
  let component: CarPriceComponent;
  let fixture: ComponentFixture<CarPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
