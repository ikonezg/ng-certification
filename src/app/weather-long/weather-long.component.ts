import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
	selector: 'app-weather-long',
	templateUrl: './weather-long.component.html',
	styleUrls: ['./weather-long.component.scss']
})
export class WeatherLongComponent implements OnInit {
	constructor(private location: Location) {}

	ngOnInit(): void {}

	onNavigateBack(): void {
		this.location.back();
	}
}
