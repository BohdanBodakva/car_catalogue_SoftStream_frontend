import { Component } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent {

  id:number = 1
  brand:string = "BMW"
  model:string = "3 Series M Sport"
  currentPrice:number = 120000


}
