import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../entities/Car';
import { RenderedCarsService } from '../services/rendered-cars.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  areTwoItemsPerRow: boolean = true

  renderedCars: Car[] = []

  constructor(private http: HttpClient, private _ActivatedRoute: ActivatedRoute, public renderedCarsService: RenderedCarsService){    
    if(this._ActivatedRoute.snapshot.paramMap.get('brandId')){
      this.renderedCarsService.areRenderingCarsByBrand = true
      
      let brandId = this.getBrandIdFromPath()
      
      this.getAllCarsByBrandId(brandId)
    } else{
      this.renderedCarsService.areRenderingCarsByBrand = false

      this.getAllCars()
    }

    // this.renderedCarsService.renderedCars = this.renderedCarsService.allExistingCars
    // this.renderedCars = this.renderedCarsService.renderedCars
  }

  getBrandIdFromPath(){
    return Number(this._ActivatedRoute.snapshot.paramMap.get('brandId'))
  }

  getAllCars(){
    this.http.get<Car[]>("http://localhost:8080/api/cars").subscribe(result => {
      this.renderedCarsService.allExistingCars = result
      this.renderedCarsService.renderedCars = result
    })
  }

  getAllCarsByBrandId(brandId: number){
    this.http.get<Car[]>("http://localhost:8080/api/brands/" + brandId + "/cars").subscribe(result => {
      this.renderedCarsService.allExistingCars = result
      this.renderedCarsService.renderedCars = result
    })
  }



  changeItemsNumberPerRow(){
    if(this.areTwoItemsPerRow){
      this.areTwoItemsPerRow = false
    } else {
      this.areTwoItemsPerRow = true
    }    
  }


}



