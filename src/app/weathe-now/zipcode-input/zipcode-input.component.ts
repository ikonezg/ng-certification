import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-zipcode-input',
  templateUrl: './zipcode-input.component.html',
  styleUrls: ['./zipcode-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZipcodeInputComponent implements OnInit {
  @Output() zipcodeEmit = new EventEmitter<string>();
  zipcode: string;
  constructor() {}

  ngOnInit(): void {}

  onAddZipcode() {
    this.zipcodeEmit.emit(this.zipcode);
    this.zipcode = '';
  }
}
