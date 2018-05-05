import { Component, OnInit } from "@angular/core";
import { WeatherDataService } from "./../weather-data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-weather-container",
  templateUrl: "./weather-container.component.html",
  styleUrls: ["./weather-container.component.css"]
})
export class WeatherContainerComponent implements OnInit {
  zipInput: string = "";
  weatherList;
  constructor(private weatherService: WeatherDataService) {}
  ngOnInit() {
    this.weatherService.getAllWeather().subscribe(resp => {
      console.log(resp.list);
      this.weatherList = resp.list;
    });
  }
}
