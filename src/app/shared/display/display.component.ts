import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-display',
	templateUrl: './display.component.html',
	styleUrls: ['./display.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit {
	@Input() code: string | number;
	@Input() small = false;

	url: string = environment.imageUrl;
	weatherImage: string;
	constructor() {}
	ngOnInit(): void {
		this.weatherImage =
			this.url +
			this.getImage(
				Number(this.code) === 800 ? 800 : Math.floor(Number(this.code) / 100)
			);
	}
	getImage(value): string {
		const mappings = {
			2: 'rain.png',
			3: 'rain.png',
			5: 'rain.png',
			6: 'snow.png',
			7: 'clouds.png',
			8: 'clouds.png',
			800: 'sun.png'
		};

		return mappings[value];
	}
}
