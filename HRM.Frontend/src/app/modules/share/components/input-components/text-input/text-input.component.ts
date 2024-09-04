import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @Input() FunctionID: any;
  @Input() LanguageClass: any;
  @Input() DatasLanguague: any[] | undefined;
  @Input() Data_input: any;
  data: any;
  @Input() typeInput: string = 'text';
  GetTypeInput(type: number): string {
    switch (type) {
      case 0:
        return 'text';
      case 1:
        return 'password';
      case 2:
        return 'email';
      case 3:
        return 'select';
      case 4:
        return 'checkbox';
      case 5:
        return 'mutliselect';
      default:
        return 'text';
    }
  }

  ngOnInit(): void {
    if (this.FunctionID) {
      let lan = localStorage.getItem('language');
      if (lan == null) {
        lan = '0';
      }
      this.data = this.DatasLanguague?.find(
        (x) => x.functionID == this.FunctionID
      );
      if (!this.data) {
        this.innerValue = '';
      } else {
        this.innerValue = this.data.values;
        this.placeholer = this.data.description;
        this.typeInput = this.GetTypeInput(this.data.kindInput);
      }
    } else {
      this.innerValue = this.Data_input.values;
      this.placeholer = this.Data_input.description;
      this.typeInput = this.GetTypeInput(this.Data_input.kindInput);
      this.pattern = this.Data_input.pattern;
      this.name = this.Data_input.name;
    }
  }
  placeholer: any = '';
  private innerValue: any = '';
  pattern: any = '';
  name:any=''
  // Các hàm dùng cho ControlValueAccessor
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  get value(): any {
    return this.innerValue;
  }

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
}
