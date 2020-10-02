import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Weather, WeatherList } from '../models/weather';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class WeatherProviderService {
	apiKey = '&units=metric&APPID=5a4b2d457ecbef9eb2a71e480b947604';
	urlNow = environment.apiUrlNow;
	urlForecast = environment.apiUrlForecast;
	constructor(private httpClient: HttpClient) {}

	getWeatherNow(zip: string): Observable<Weather> {
		return this.httpClient.get(this.urlNow + zip + this.apiKey).pipe(
			map((res: any) => ({
				name: res.name,
				temp: res.main.temp,
				tempMax: res.main.temp_max,
				tempMin: res.main.temp_min,
				weather: res.weather[0].main,
				code: res.weather[0].id
			}))
		);
	}

	getWeatherForecastByZip(zip: string): Observable<WeatherList> {
		return this.httpClient
			.get(this.urlForecast + zip + '&cnt=5' + this.apiKey)
			.pipe(
				map((res: any) => {
					const city = res.city.name;
					const list = res.list.map(item => ({
						name: city,
						temp: item.temp.day,
						tempMax: item.temp.max,
						tempMin: item.temp.min,
						weather: item.weather[0].main,
						code: item.weather[0].id,
						date: moment.unix(item.dt).format('dddd, MMM D')
					}));
					console.log(list);

					return { list, name: city };
				})
			);
	}
}
