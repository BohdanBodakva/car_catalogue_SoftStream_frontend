import { Component } from '@angular/core';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent {
  id:number = 1
  brand:string = "BMW"
  model:string = "3 Series M Sport"
  color:string = "Blue"
  engineCapacity:number = 12
  currentPrice:number = 120000
  description:string = "good car!"
}
