import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Weather } from 'src/app/models/weather';
import { WeatherProviderService } from '../../services/weather-provider.service';
@Component({
	selector: 'app-weather-card',
	templateUrl: './weather-card.component.html',
	styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
	@Input() zipcode: string;
	@Output() closeCard = new EventEmitter<string>();

	weather$: Observable<Weather>;
	errorObject: any;
	constructor(private weatherService: WeatherProviderService) {}

	ngOnInit(): void {
		this.weather$ = this.weatherService.getWeatherNow(this.zipcode).pipe(
			catchError(err => {
				this.errorObject = err;
				return throwError(err);
			})
		);
	}

	onClose(): void {
		this.closeCard.emit(this.zipcode);
	}
}
