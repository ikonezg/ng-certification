import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherLongComponent } from './weather-long.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: ':zipcode', component: WeatherLongComponent }];

@NgModule({
  declarations: [WeatherLongComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class WeatherLongModule {}
