import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../entities/Brand';
import { Car } from '../entities/Car';
import { CarPrice } from '../entities/CarPrice';


@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent {

  showAllPrices: boolean = false

  car: any;
  carPrices: any

  constructor(private http: HttpClient,
    private _ActivatedRoute: ActivatedRoute,
    private router: Router) {

    let carId: number = this.getIdFromPath()
    this.getCarById(carId)
    this.getPricesByCarId(carId)

  }

  getIdFromPath() {
    return Number(this._ActivatedRoute.snapshot.params["id"]);
  }

  getCarById(id: number) {
    this.http.get<Car>("http://localhost:8080/api/cars/" + id).subscribe(result => {
      this.car = result
    })
  }

  getPricesByCarId(carId: number) {
    this.http.get<CarPrice>("http://localhost:8080/api/car-price/" + carId).subscribe(result => {
      this.carPrices = result
      console.log(JSON.stringify(result))
    })
  }

  updateCar(car: any) {
    this.router.navigate(['/create-car'], {
      queryParams: {
        carId: car.id,
        brandId: car.brand.id,
        brandName: car.brand.name,
        model: car.model,
        color: car.color,
        engineCapacity: car.engineCapacity,
        currentPrice: car.currentPrice,
        description: car.description
      }
    })
  }

  deleteCarById(carId: number){
    this.http.delete("http://localhost:8080/api/cars/" + carId).subscribe()

    this.router.navigate([''])
  }




  renderPrices(){
    if(this.showAllPrices){
      this.showAllPrices = false
    } else {
      this.showAllPrices = true
    }
  }







}
