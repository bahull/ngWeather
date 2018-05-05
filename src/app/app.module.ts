import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WeatherContainerComponent } from "./weather-container/weather-container.component";
import { HttpClient } from "selenium-webdriver/http";
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { CityForecastComponent } from './city-forecast/city-forecast.component';

@NgModule({
  declarations: [AppComponent, WeatherContainerComponent, WeatherDetailsComponent, CityForecastComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
