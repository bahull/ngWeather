import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Data } from "./data";

@Injectable({
  providedIn: "root"
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}
  configUrl: string = "http://api.openweathermap.org/data/2.5/group?id=5128638,4190598,4410836&units=imperial&APPID=e383bdaf1cc19b1db4db82864b7913d3";
  getAllWeather(): Observable<any> {
    return this.http
      .get(this.configUrl)
      .pipe(
        tap(heroes => this.log("fetched heroes")),
        catchError(this.handleError("getHeroes", []))
      );
  }
  private log(message: string) {
    console.log("log Error:", message);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
