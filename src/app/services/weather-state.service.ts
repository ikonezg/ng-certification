import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherStateService {
  private zipcodes: string[] = [];
  private zipSubject = new BehaviorSubject<string[]>([]);
  zip$ = this.zipSubject.asObservable();
  constructor() {}

  addZipcode(zipcode: string) {
    this.zipcodes = [...this.zipcodes, zipcode];
    this.zipSubject.next(this.zipcodes);
  }

  removeZipcode(zipcode: string) {
    this.zipcodes = this.zipcodes.filter((z) => z !== zipcode);
    this.zipSubject.next(this.zipcodes);
  }

  getZipcodes() {
    return this.zip$;
  }
}
