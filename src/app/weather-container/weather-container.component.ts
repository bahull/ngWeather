import { Component, OnInit } from "@angular/core";
import { WeatherDataService } from "./../weather-data.service";
import { Observable } from "rxjs";
import { CIRCULAR } from "@angular/core/src/render3/instructions";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-weather-container",
  templateUrl: "./weather-container.component.html",
  styleUrls: ["./weather-container.component.css"],
  animations: [
    trigger("arrival", [
      transition("* => *", [
        query(":enter", style({ opacity: 0 }), { optional: true }),
        query(
          ":enter",
          stagger("300ms", [
            animate(
              ".8s ease-in",
              keyframes([
                style({ opacity: 0, transform: "translateY(-75%)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(35px)",
                  offset: 0.3
                }),
                style({ opacity: 1, transform: "translateY(0)", offset: 1 })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
    // trigger("departing", [
    //   transition("* => void", [
    //     query(":leave", style({ opacity: 1 }), { optional: true }),

    //     query(
    //       ":leave",
    //       stagger("300ms", [
    //         animate(
    //           ".8s ease-in",
    //           keyframes([
    //             style({ opacity: 1, transform: "translateY(0)", offset: 0 }),
    //             style({
    //               opacity: 0.5,
    //               transform: "translateY(35px)",
    //               offset: 0.3
    //             }),
    //             style({ opacity: 0, transform: "translateY()", offset: 1 })
    //           ])
    //         )
    //       ]),
    //       { optional: true }
    //     )
    //   ])
    // ])
  ]
})
export class WeatherContainerComponent implements OnInit {
  zipInput: string = "";
  weatherList;
  cityWeather;
  cityData: string;
  zipFail: boolean = false;
  searchWeather() {
    if (this.zipInput.length !== 5) {
      this.zipFail = true;
      setTimeout(() => (this.zipFail = false), 3000);
      return;
    }
    this.zipFail = false;
    this.cityWeather = [];
    this.weatherService
      .getCityWeather(+this.zipInput)
      .subscribe(cityWeather => {
        this.cityData = cityWeather.city.name;

        this.cityWeather = cityWeather.list.filter((curr, ind, arr) => {
          return (
            ind ===
            cityWeather.list.findIndex(
              next => next.dt_txt.split(" ")[0] === curr.dt_txt.split(" ")[0]
            )
          );
        });
        console.log(this.cityWeather);
        this.zipInput = "";
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
      console.log(this.weatherList);
    });
  }
}
