import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLongComponent } from './weather-long.component';

describe('WeatherLongComponent', () => {
  let component: WeatherLongComponent;
  let fixture: ComponentFixture<WeatherLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
