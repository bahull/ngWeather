import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-city-forecast",
  templateUrl: "./city-forecast.component.html",
  styleUrls: ["./city-forecast.component.css"]
})
export class CityForecastComponent implements OnInit {
  @Input() city;
  currentDate = new Date();
  constructor() {}

  ngOnInit() {}
}
