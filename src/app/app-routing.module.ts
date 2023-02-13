import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandCatalogueComponent } from './brand-catalogue/brand-catalogue.component';
import { BrandComponent } from './brand/brand.component';
import { CarItemComponent } from './car-item/car-item.component';
import { CarPageComponent } from './car-page/car-page.component';
import {CatalogueComponent} from "./catalogue/catalogue.component";
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component: CatalogueComponent},
  {path: "brands", component: BrandCatalogueComponent},
  {path: "brands/:id", component: BrandComponent},
  {path: "brands/:brandId/cars", component: CatalogueComponent},
  {path: "create-car", component: CreateCarComponent},
  {path: "create-brand", component: CreateBrandComponent},
  {path: ":id", component: CarPageComponent},   
  

  
  
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
