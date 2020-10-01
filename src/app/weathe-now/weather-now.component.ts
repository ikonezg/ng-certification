import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherStateService } from '../services/weather-state.service';
@Component({
  selector: 'app-weather-now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.scss'],
})
export class WeatherNowComponent implements OnInit {
  zip$: Observable<string[]>;
  constructor(private weatherState: WeatherStateService) {}

  ngOnInit(): void {
    this.zip$ = this.weatherState.getZipcodes();
  }

  onAddZip(zipcode: string) {
    if (zipcode) {
      this.weatherState.addZipcode(zipcode);
    }
  }

  onCloseWatherCard(zipcode: string) {
    this.weatherState.removeZipcode(zipcode);
  }
}
