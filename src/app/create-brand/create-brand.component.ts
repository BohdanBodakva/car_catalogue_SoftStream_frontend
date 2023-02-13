import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Brand } from '../entities/Brand';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent {

  isUpdating: boolean = false

  createBrandForm: FormGroup

  constructor(private http: HttpClient, private router: Router, private _ActivatedRoute: ActivatedRoute) {

    if (this._ActivatedRoute.snapshot.queryParamMap.get("brandName")) {
      
      let brandName = this._ActivatedRoute.snapshot.queryParamMap.get("brandName")

      console.log("br -> " + brandName)

      this.createBrandForm = new FormGroup({
        name: new FormControl(brandName)
      })

      this.isUpdating = true

    } else {
      this.createBrandForm = new FormGroup({
        name: new FormControl()
      })
    }

  }

  createBrand() {
    let brandName = this.createBrandForm.value.name
    let brand = new Brand(brandName)

    this.http.post<Brand>("http://localhost:8080/api/brands", brand).subscribe(result => {
      console.log(result)
    })

    this.submit()
  }

  updateBrand() {

    let brandId = this._ActivatedRoute.snapshot.queryParams['brandId']
    let brand = new Brand(this.createBrandForm.value.name)

    this.http.put<Brand>("http://localhost:8080/api/brands/" + brandId, brand).subscribe(result => {
      console.log(result)
    })

    this.isUpdating = false

    this.submit()
  }



  submit() {
    this.router.navigate(['/brands'])
  }



}
