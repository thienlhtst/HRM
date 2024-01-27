/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
  standalone: true,
})
export class PipeSharePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    return items.filter(item => {
      // Thực hiện logic lọc theo ID kiểu chuỗi
      return item.id.toString().includes(searchText);
    });
  }

}
