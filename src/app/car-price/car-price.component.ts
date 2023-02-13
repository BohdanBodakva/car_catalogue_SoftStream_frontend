import { Component } from '@angular/core';
import { CarPrice } from '../entities/CarPrice';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-price-list',
  templateUrl: './car-price.component.html',
  styleUrls: ['./car-price.component.css']
})
export class CarPriceComponent {

  carPrices: any;

  constructor(private http: HttpClient,
    private _ActivatedRoute: ActivatedRoute) {

      let carId: number = this.getIdFromPath()
      this.getAllPricesByCarid(http, carId)
  }

  getIdFromPath() {
    return Number(this._ActivatedRoute.snapshot.paramMap.get("id")!.at(0));
  }

  getAllPricesByCarid(http: HttpClient, carId: number) {
    this.http.get<CarPrice[]>("http://localhost:8080/api/car-price/" + carId).subscribe(result => {
      this.carPrices = result
    })
  }

}
