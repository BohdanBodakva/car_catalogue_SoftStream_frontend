import { Component } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Car } from '../entities/Car';
import { Brand } from '../entities/Brand';


@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  updatingCarId: number = 0

  isUpdating: boolean = false

  allBrands: Brand[] = [];
  allColors: string[] = [];

  createCarForm: FormGroup

  constructor(private http: HttpClient, private router: Router, private _ActivatedRoute: ActivatedRoute){
    this.updateAllBrands(http);
    this.updateAllColors(http);

    if (this._ActivatedRoute.snapshot.queryParamMap.get("brandName")){

      this.updatingCarId = this._ActivatedRoute.snapshot.queryParams['carId']

      let brandId = this._ActivatedRoute.snapshot.queryParams['brandId']
      let brandName = this._ActivatedRoute.snapshot.queryParams['brandName']
      let model = this._ActivatedRoute.snapshot.queryParams['model']
      let color = this._ActivatedRoute.snapshot.queryParams['color']
      let engineCapacity = this._ActivatedRoute.snapshot.queryParams['engineCapacity']
      let currentPrice = this._ActivatedRoute.snapshot.queryParams['currentPrice']
      let description = this._ActivatedRoute.snapshot.queryParams['description']

      this.createCarForm = new FormGroup({
        brand: new FormControl(new Brand(brandName, brandId)),
        model: new FormControl(model),
        color: new FormControl(color),
        engineCapacity: new FormControl(engineCapacity),
        currentPrice: new FormControl(currentPrice),
        description: new FormControl(description)
      })

      this.isUpdating = true 

    } else {
      this.createCarForm = new FormGroup({
        brand: new FormControl(),
        model: new FormControl(),
        color: new FormControl(),
        engineCapacity: new FormControl(),
        currentPrice: new FormControl(),
        description: new FormControl()
      })
    }   

    
  }

  updateAllBrands(http: HttpClient) {
    this.http.get<Brand[]>("http://localhost:8080/api/brands").subscribe(result => {
      this.allBrands = result
      console.log("brands:", this.allBrands)
    })
  }

  updateAllColors(http: HttpClient) {
    this.http.get<string[]>("http://localhost:8080/api/colors").subscribe(result => {
      this.allColors = result
    })
  }

  createCar(){
    let brand = this.createCarForm.value.brand
    let model = this.createCarForm.value.model
    let color = this.createCarForm.value.color
    let engineCapacity = this.createCarForm.value.engineCapacity
    let currentPrice = this.createCarForm.value.currentPrice
    let description = this.createCarForm.value.description

    let car = new Car(brand, model, color, engineCapacity, currentPrice, description)

    console.log("car", this.createCarForm.value)

    this.http.post<Car>("http://localhost:8080/api/cars", car).subscribe(result => {
      console.log(result)
    })

    this.submit()
  }

  updateCar(){  

    let carId = this._ActivatedRoute.snapshot.queryParams['carId']
    let brandId = Number(this.createCarForm.value.brand.id)
    let model = this.createCarForm.value.model
    let color = this.createCarForm.value.color
    let engineCapacity = Number(this.createCarForm.value.engineCapacity)
    let currentPrice = Number(this.createCarForm.value.currentPrice)
    let description = this.createCarForm.value.description

    let car = new Car(new Brand("", brandId), model, color, engineCapacity, currentPrice, description)

    // console.log("carId == " + carId)    

    this.http.put<Car>("http://localhost:8080/api/cars/" + carId, car).subscribe(result => {
      console.log(result)
    })

    this.isUpdating = false

    this.submit()
  }

  submit(){
    this.router.navigate([''])
  }

}
