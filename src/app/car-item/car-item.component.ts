import { Component, Input } from '@angular/core';
// import { Car } from '../catalogue/catalogue.component';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css'],
})
export class CarItemComponent {

  @Input() car: any;

  
}

