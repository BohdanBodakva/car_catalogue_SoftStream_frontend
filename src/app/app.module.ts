import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarItemComponent } from './car-item/car-item.component';
import { CarPageComponent } from './car-page/car-page.component';
import { CarPriceComponent } from './car-price/car-price.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CreateCarComponent } from './create-car/create-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarItemComponent,
    CarPageComponent,
    CarPriceComponent,
    CatalogueComponent,
    AppHeaderComponent,
    CreateCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
