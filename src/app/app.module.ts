import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarItemComponent } from './car-item/car-item.component';
import { CarPageComponent } from './car-page/car-page.component';
import { CarPriceComponent } from './car-price/car-price.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { BrandComponent } from './brand/brand.component';
import { BrandCatalogueComponent } from './brand-catalogue/brand-catalogue.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './filters/filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CarItemComponent,
    CarPageComponent,
    CarPriceComponent,
    CatalogueComponent,
    AppHeaderComponent,
    CreateCarComponent,
    BrandComponent,
    BrandCatalogueComponent,
    CreateBrandComponent,
    PageNotFoundComponent,
    FiltersComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
