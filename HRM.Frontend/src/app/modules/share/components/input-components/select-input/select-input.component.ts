import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true,
    },
  ],
})
export class SelectInputComponent implements OnInit, ControlValueAccessor {
  options: any[] = [];
  private innerValue: any = '';
  constructor() {}
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  set value(val: any) {
    this.innerValue = val;
    this.onChange(val);
  }
  writeValue(value: any): void {
    this.innerValue = value;
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Xử lý trạng thái disabled nếu cần
  }
  selectedOption: number | null = null;
  @Input() model: number | null = null;
  @Input() nameoptions: string = '';
  sexlan =localStorage.getItem("language")
  ngOnInit() {

    if (this.nameoptions != 'sex') {
      this.options = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
      ];
    }
  }
  onModelChange(value: number): void {
    this.innerValue = value;
    this.onChange(value);
    console.log(this.innerValue);
  }
}
