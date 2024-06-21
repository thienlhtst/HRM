/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Input, OnInit } from '@angular/core';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';

@Component({
  selector: 'language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss']
})
export class LanguageInputComponent implements OnInit {
  @Input() FunctionID : any
  @Input() LanguageClass : any
  content : string = "loading..."
  ngOnInit(): void {
    const lan = localStorage.getItem("language")
    this.content = this.language.find(x=> x.functionid ==this.FunctionID && x.language == lan).content


  }
  language : any[] = [
  {
    functionid : 'P001',
    content : 'Profile',
    language : 'en',
    layout : 'profile'
  },
  {
    functionid : 'P001',
    content : 'Trang ca nhan',
    language : 'vi',
    layout : 'profile'
  },
]
}
