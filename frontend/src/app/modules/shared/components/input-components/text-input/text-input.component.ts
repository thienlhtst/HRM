import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements OnInit,ControlValueAccessor {
  @Input() FunctionID: any;
  @Input() LanguageClass: any;
  @Input() DatasLanguague: any[];
  data: any;
  typeInput: string = 'text';
  GetTypeInput(type:number):string {
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
    let lan = localStorage.getItem('language');
    if (lan == null) {
      lan = '0';
    }
    this.data = this.DatasLanguague.find((x) => x.functionID == this.FunctionID);
    this.innerValue=this.data.values;
   
    this.typeInput=this.GetTypeInput(this.data.kindInput);
    console.log(this.typeInput)
  }

  private innerValue: any = '';

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
