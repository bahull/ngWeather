import { Component, OnInit } from "@angular/core";
import { WeatherDataService } from "./../weather-data.service";
import { Observable } from "rxjs";
import { CIRCULAR } from "@angular/core/src/render3/instructions";

@Component({
  selector: "app-weather-container",
  templateUrl: "./weather-container.component.html",
  styleUrls: ["./weather-container.component.css"]
})
export class WeatherContainerComponent implements OnInit {
  zipInput: string = "";
  weatherList;
  cityWeather;
  cityData: string;
  searchWeather(): void {
    this.weatherService
      .getCityWeather(+this.zipInput)
      .subscribe(cityWeather => {
        console.log(cityWeather);
        this.cityData = cityWeather.city.name;
        this.cityWeather = cityWeather.list.filter((curr, ind, arr) => {
          return ind === arr.findIndex(next => next.dt_txt === curr.dt_txt);
        });
        this.zipInput = "";
        console.log(this.cityWeather, "Hit!");
      });
  }
  constructor(private weatherService: WeatherDataService) {}
  ngOnInit() {
    this.weatherService.getAllWeather().subscribe(resp => {
      this.weatherList = resp.list;
    });
  }
}
