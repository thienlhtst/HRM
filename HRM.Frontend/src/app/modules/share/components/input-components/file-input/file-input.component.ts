import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true,
    },
  ],
})
export class FileInputComponent implements OnInit,ControlValueAccessor  {
  fileName: string = '';
  constructor() { }
  selectedFile: File | null = null;
  ngOnInit() {
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      this.fileName = this.file.name;
      this.onChange(this.file); // Gọi onChange để cập nhật giá trị form control
      this.onTouched(); // Đánh dấu là đã chạm vào
    }
  }
  clearFile(): void {
    this.file = null;
    this.fileName = '';
    this.onChange(null);
  }
  private file: File | null = null;

  // Các hàm của ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.file = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optionally handle the disabled state
  }


}
