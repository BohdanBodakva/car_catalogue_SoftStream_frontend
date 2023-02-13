import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../entities/Brand';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  
  @Input() brand: any;

  constructor(private http: HttpClient, private router: Router){
    console.log(this.brand)
  }

  updateBrand(brand: Brand) {

    this.router.navigate(['/create-brand'], {queryParams: {brandId: this.brand.id, brandName: this.brand.name}})

  }

  deleteBrandById(brandId: number){
    console.log(brandId)

    this.http.delete("http://localhost:8080/api/brands/" + brandId).subscribe()

    this.refreshPage()
  }

  refreshPage(){
    window.location.reload()
  }
  
}
