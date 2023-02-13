import { Component } from '@angular/core';
import { RenderedCarsService } from '../services/rendered-cars.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  inputValue: string = ""

  constructor(private renderedCarsService: RenderedCarsService) {

  }

  search(value: any) {
    this.renderedCarsService.searchedCars = [...this.renderedCarsService.renderedCars]
    console.log(this.inputValue)
    console.log("r " + this.renderedCarsService.renderedCars)
    console.log("s " + this.renderedCarsService.searchedCars)
    if (this.inputValue != "" || this.inputValue != null) {

      this.renderedCarsService.renderedCars = this.renderedCarsService.renderedCars
        .filter(car => car.model.toLowerCase().search(value.toLowerCase()) !== -1)

    } else {

      this.renderedCarsService.renderedCars = this.renderedCarsService.searchedCars

    }
  }


  clearInputField() {
    this.renderedCarsService.renderedCars = this.renderedCarsService.allExistingCars
    this.inputValue = ""
  }

}
