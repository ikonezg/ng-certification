export interface Weather {
	name: string;
	temp: string;
	tempMax: string;
	tempMin: string;
	weather: string;
	code: number;
	date?: string;
}

export interface WeatherList {
	list: Weather[];
	name: string;
}
