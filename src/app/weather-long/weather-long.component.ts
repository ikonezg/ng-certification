import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { WeatherProviderService } from '../services/weather-provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { WeatherList } from '../models/weather';

@Component({
	selector: 'app-weather-long',
	templateUrl: './weather-long.component.html',
	styleUrls: ['./weather-long.component.scss']
})
export class WeatherLongComponent implements OnInit {
	forecast$: Observable<WeatherList>;
	errorObject: any;
	constructor(
		private location: Location,
		private weatherService: WeatherProviderService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.forecast$ = this.route.paramMap.pipe(
			switchMap(paramMap =>
				this.weatherService.getWeatherForecastByZip(paramMap.get('zipcode'))
			),
			catchError(err => {
				this.errorObject = err;
				return throwError(err);
			})
		);
	}

	onNavigateBack(): void {
		// this.location.back();
		this.router.navigateByUrl('/weather-now');
	}
}
