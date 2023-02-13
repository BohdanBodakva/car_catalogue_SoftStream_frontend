import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Brand } from '../entities/Brand';
import { RenderedCarsService } from '../services/rendered-cars.service';
import { Car } from '../entities/Car';
import { FormGroup, FormControl } from '@angular/forms';
import { CarPrice } from '../entities/CarPrice';
import { async, flatMap } from 'rxjs';
import { CatalogueComponent } from '../catalogue/catalogue.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  priceRange: string[] = [
    "2000", "5000", "10000", "25000", "50000", "100000"
  ]

  date: Date = new Date()
  // dateCanBeSelected: boolean = false


  allBrands: Brand[] = []
  allColors: string[] = []

  currentBrandName: string = ""
  currentCars: Car[] = []

  filterForm: FormGroup

  constructor(private http: HttpClient, public renderedCarsService: RenderedCarsService) {
    this.updateAllBrands()
    this.updateAllColors()

    this.filterForm = new FormGroup({
      brand: new FormControl(""),
      color: new FormControl(""),
      engineCapacity: new FormControl(null),
      price: new FormControl(""),
      date: new FormControl(this.date),
    })
  }

  updateAllBrands() {
    this.http.get<Brand[]>("http://localhost:8080/api/brands").subscribe(result => {
      this.allBrands = result
      console.log("brands:", this.allBrands)
    })
  }

  updateAllColors() {
    this.http.get<string[]>("http://localhost:8080/api/colors").subscribe(result => {
      this.allColors = result
    })
  }

  selectBrand() {
    console.log("brand name: " + this.currentBrandName)

    if (this.currentBrandName == "") {
      this.renderedCarsService.renderedCars = this.renderedCarsService.allExistingCars.filter(car => car)
    } else {
      this.renderedCarsService.renderedCars = this.renderedCarsService.allExistingCars.filter(car => car.brand.name == this.currentBrandName)
    }

    console.log(this.renderedCarsService.renderedCars)
  }

  bDate: boolean = true


  doFilter() {
    let brandName = this.filterForm.value.brand
    let color = this.filterForm.value.color
    let engineCapacity = this.filterForm.value.engineCapacity
    let price = this.filterForm.value.price

    // this.renderedCarsService.allExistingCars.map(car => console.log("====> " + this.checkPrice(car, price, this.http)))

    console.log("RCARS: " + JSON.stringify(this.renderedCarsService.allExistingCars))

    this.renderedCarsService.renderedCars = this.renderedCarsService.allExistingCars
      .filter(car => {
        
        return this.checkBrand(car.brand.name, brandName) && this.checkColor(car.color, color) && this.checkEngineCapacity(car, engineCapacity) && this.checkPrice(car, price, this.http)
      })

    console.log("RCARS: " + JSON.stringify(this.renderedCarsService.renderedCars))


    // console.log("tr/fs: ", this.checkPrice(this.renderedCarsService.renderedCars[0], price, this.http))

  }

  checkBrand(carBrandName: string, brandName: string) {
    if (brandName == "") {
      return true
    }
    return carBrandName == brandName
  }

  checkColor(carColor: string, color: string) {
    if (color == "") {
      return true
    }
    return carColor == color
  }

  checkEngineCapacity(car: any, engineCapacity: number) {
    if (engineCapacity == null) {
      return true
    }
    return Number(car.engineCapacity) >= engineCapacity
  }



  checkPrice(car: any, p: string, http: HttpClient) {

    let currentDate = this.filterForm.value.date

    if (p == "") {
      
      return true
    }

    let price = Number(p)

    console.log("opa " + JSON.stringify(car.prices))

    let ourDate: any

    for(let idx = 0; idx < car.prices.length; idx++){
      console.log("da " + JSON.stringify(Object.keys(car.prices[idx])[0]))
      if(this.formatDate(new Date(Object.keys(car.prices[idx])[0])) == this.formatDate(new Date(currentDate))){
        ourDate = car.prices[idx]
      }
    }

    if(ourDate == undefined){
      return false
    }

    console.log(price)
    console.log(Number(Object.values(ourDate)[0]))

    return price >= Number(Object.values(ourDate)[0])


    // let ourCarPrice: CarPrice

    // return this.http.get<CarPrice[]>("http://localhost:8080/api/car-price/" + carId).subscribe(result => {
    //   console.log("result " + JSON.stringify(result))
    //   ourCarPrice = result.filter((carPrice: CarPrice) =>
    //     this.formatDate(new Date(carPrice.date)) == this.formatDate(new Date(currentDate))
    //   )[0]

    //   if (ourCarPrice == undefined) {
    //     console.log("ourCarPrice is undefined (((")
    //     this.bDate = false
    //     return
    //   }

    //   console.log("finish: " + (price >= ourCarPrice.price))

    //   this.bDate = (price >= ourCarPrice.price)
    // })
  }

  formatDate(date: Date) {
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let day1 = day.toString().padStart(2, '0');
    let month1 = month.toString().padStart(2, '0');

    return `${day1}/${month1}/${year}`;
  }

  // async f(carId: number) {
  //   let a

  //   await this.http.get<CarPrice[]>("http://localhost:8080/api/car-price/" + carId)
  //     .toPromise()
  //     .then(result => {
  //       a = result
  //     })

  //   return a;
  // }





  async getAllCarPricesByCarId(carId: number) {
    const carPrices = await this.http.get<CarPrice[]>("http://localhost:8080/api/car-price/" + carId).toPromise()
    return carPrices
  }





  resetAllFilters() {
    this.renderedCarsService.renderedCars = this.renderedCarsService.allExistingCars

    this.filterForm = new FormGroup({
      brand: new FormControl(""),
      color: new FormControl(""),
      engineCapacity: new FormControl(null),
      price: new FormControl(""),
      date: new FormControl(this.date),
    })
  }

}
