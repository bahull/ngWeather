import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WeatherContainerComponent } from "./weather-container/weather-container.component";
const routes: Routes = [{ path: "", component: WeatherContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
