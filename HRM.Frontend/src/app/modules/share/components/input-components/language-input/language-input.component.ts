/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Input, OnInit } from '@angular/core';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { SystemService } from 'src/Services/System/System.service';

@Component({
  selector: 'language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss']
})
export class LanguageInputComponent implements OnInit {
  @Input() FunctionID: any;
  @Input() LanguageClass: any;
  @Input() DatasLanguague: any[] | undefined;
  @Input() textExample:string =''
  data: any;
  content: string = 'loading...';
  constructor(private systemService: SystemService) {}
  ngOnInit(): void {
    let lan = localStorage.getItem('language');
    if (lan == null) {
      lan = '0';
    }
    /*this.systemService.GetLangugeFunction(this.FunctionID, lan).subscribe((res) => {
      console.log(res)
     this.content = res.label
   });*/
    this.data = this.DatasLanguague?.find((x) => x.functionID == this.FunctionID);
    if (this.data && this.data.label == null) {
      this.data.label = this.content;
    }
  }
}
