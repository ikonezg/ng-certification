import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'weather-now', pathMatch: 'full' },
  {
    path: 'weather-now',
    loadChildren: () =>
      import('./weathe-now/weathe-now.module').then((m) => m.WeatheNowModule),
  },
  {
    path: 'forecast',
    loadChildren: () =>
      import('./weather-long/weather-long.module').then(
        (m) => m.WeatherLongModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
