import { Component } from '@angular/core';
import { Brand } from '../entities/Brand';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-catalogue',
  templateUrl: './brand-catalogue.component.html',
  styleUrls: ['./brand-catalogue.component.css']
})
export class BrandCatalogueComponent {

  brands: Brand[] = [];

  constructor(private http: HttpClient, private _ActivatedRoute: ActivatedRoute){
    this.getAllBrands(http);
  }

  getAllBrands(http: HttpClient){
    this.http.get<Brand[]>("http://localhost:8080/api/brands").subscribe(result => {
      this.brands = result
    })
  }

}


