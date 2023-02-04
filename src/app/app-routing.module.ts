import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarItemComponent } from './car-item/car-item.component';
import {CatalogueComponent} from "./catalogue/catalogue.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
