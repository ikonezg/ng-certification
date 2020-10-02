import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherStateService {
	private zipcodes: string[] = [];
	private zipSubject = new BehaviorSubject<string[]>([]);
	zip$ = this.zipSubject.asObservable();
	constructor() {
		this.loadZipcodesLS();
	}

	addZipcode(zipcode: string) {
		this.zipcodes = this.zipcodes.includes(zipcode)
			? [...this.zipcodes]
			: [...this.zipcodes, zipcode];
		localStorage.setItem('zipcodes', JSON.stringify(this.zipcodes));
		this.zipSubject.next(this.zipcodes);
	}

	removeZipcode(zipcode: string) {
		this.zipcodes = this.zipcodes.filter(z => z !== zipcode);
		localStorage.setItem('zipcodes', JSON.stringify(this.zipcodes));
		console.log(this.zipcodes);

		this.zipSubject.next(this.zipcodes);
	}

	getZipcodes() {
		return this.zip$;
	}
	removeZipcodeLS(zipcode: string) {
		const zip = localStorage.getItem('zipcodes')
			? JSON.parse(localStorage.getItem('zipcodes'))
			: null;
		localStorage.setItem(
			'zipcodes',
			JSON.stringify(zip.filter(z => z !== zipcode))
		);
	}

	loadZipcodesLS() {
		const zip = localStorage.getItem('zipcodes')
			? JSON.parse(localStorage.getItem('zipcodes'))
			: null;
		if (zip) {
			this.zipcodes = [...zip];
			this.zipSubject.next(this.zipcodes);
		}
	}
}
