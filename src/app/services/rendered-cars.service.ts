import { Injectable } from '@angular/core';
import { Car } from '../entities/Car';

@Injectable({
  providedIn: 'root'
})
export class RenderedCarsService {

  allExistingCars: Car[] = []
  renderedCars: Car[] = []
  searchedCars: Car[] = []

  areRenderingCarsByBrand: boolean = false

  constructor() { }
}
