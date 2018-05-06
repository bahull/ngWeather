import { Component, OnInit, Input } from "@angular/core";
@Component({
  selector: "app-weather-details",
  templateUrl: "./weather-details.component.html",
  styleUrls: ["./weather-details.component.css"]
})
export class WeatherDetailsComponent implements OnInit {
  @Input() location;
  constructor() {}
  weatherIcons = {
    "01d": "./assets/01d.png",
    "01n": "./assets/01n.png",
    "02d": "./assets/02d.png",
    "02n": "./assets/02n.png",
    "03d": "./assets/03d.png",
    "03n": "./assets/03n.png",
    "04n": "./assets/04n.png",
    "09d": "./assets/09d.png",
    "09n": "./assets/09n.png",
    "10d": "./assets/10d.png",
    "10n": "./assets/10n.png",
    "11d": "./assets/11d.png",
    "11n": "./assets/11n.png",
    "13d": "./assets/13d.png",
    "13n": "./assets/13n.png",
    "50d": "./assets/50d.png",
    "50n": "./assets/50n.png"
  };

  ngOnInit() {}
}
