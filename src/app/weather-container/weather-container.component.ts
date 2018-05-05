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
  zipFail: boolean = false;
  searchWeather() {
    if (this.zipInput.length !== 5) return (this.zipFail = true);
    this.zipFail = false;
    this.cityWeather = [];
    this.weatherService
      .getCityWeather(+this.zipInput)
      .subscribe(cityWeather => {
        console.log(cityWeather);
        this.cityData = cityWeather.city.name;
        this.cityWeather = cityWeather.list.filter((curr, ind, arr) => {
          return (
            ind ===
            cityWeather.list.findIndex(
              next => next.dt_txt.split(" ")[0] === curr.dt_txt.split(" ")[0]
            )
          );
        });
        this.zipInput = "";
        console.log(this.cityWeather, "Hit!");
      });
  }
  clearResults(): void {
    this.cityWeather = false;
    this.cityData = "";
  }
  constructor(private weatherService: WeatherDataService) {}
  ngOnInit() {
    this.weatherService.getAllWeather().subscribe(resp => {
      this.weatherList = resp.list;
    });
  }
}
