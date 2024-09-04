import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'create-object',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() Datas: any[] = [
    {
      FunctionID: 1,
      label: 'Basic Information',
      icon: 'bi bi-person-square',
      detail_items: [
        {
          FunctionID: 1,
          label: 'Thông tin cơ bản',
          name: 'name',
          description:'Nhập tên',
          kindInput: 0,
          pattern: '[0-9]+',
        },
        {
          FunctionID: 2,
          label: 'Thông tin cơ bản',
          name: 'name1',
          description:'Nhập tên',
          kindInput: 0, pattern: '[0-9]+',
        },
        {
          FunctionID: 1,
          label: 'Thông tin cơ bản',
          name: 'name2',
          description:'Nhập tên',
          kindInput: 0,
          pattern: '[0-9]+',
        },
        
      ]

    },


  ]
  @Input() datasLanguage: any = [];

  constructor() { }

  ngOnInit() {
    this.Datas.forEach((element) => {
      const data = this.separateData(element.detail_items)
      element.detail_items = data
    })
  }
  separateData(array: any[]): any[][] {
    const result: any[][] = [];

    for (let i = 0; i < array.length; i += 3) {
      const chunk = array.slice(i, i + 3);
      result.push(chunk);
    }

    return result;
  }
  findDataLanguage(data: any, kindSystem: any): any {
    return data.find((x: any) => x.kindSystem == kindSystem)
  }
  Add(data: any) {
    console.log(data)
  }
}
