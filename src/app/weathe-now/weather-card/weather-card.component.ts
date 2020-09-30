import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/models/weather';
import { WeatherProviderService } from '../../services/weather-provider.service';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() zipcode: string;
  weather$: Observable<Weather>;
  constructor(private weatherService: WeatherProviderService) {}

  ngOnInit(): void {
    this.weather$ = this.weatherService.getWeatherNow(this.zipcode);
  }
}
