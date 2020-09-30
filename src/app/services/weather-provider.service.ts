import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';
@Injectable({
  providedIn: 'root',
})
export class WeatherProviderService {
  apiKey = '&units=metric&APPID=5a4b2d457ecbef9eb2a71e480b947604';
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getWeatherNow(zip: string): Observable<Weather> {
    return this.httpClient.get(this.url + zip + this.apiKey).pipe(
      map((res: any) => ({
        name: res.name,
        temp: res.main.temp,
        tempMax: res.main.temp_max,
        tempMin: res.main.temp_min,
        weather: res.weather[0].main,
      }))
    );
  }
}
