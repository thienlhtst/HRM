import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { routes } from 'src/app/app.routes';

@Component({
  selector: 'nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss'],
})
export class NavAdminComponent implements OnInit, AfterViewInit {
  @ViewChildren('itemDiv') myDivElements!: QueryList<ElementRef>;
  datas: any = [
    {
      sys: {
        FunctionID: 1,
        label: 'Home',
        isImportant: true,
      },
      sysList: [
        {
          FunctionID: 1,
          label: 'Dashboard',
          icon: 'bi bi-house-door',
          routes: 'dashboard',
        },
        {
          id: 2,
          name: 'Dashboard',
          icon: 'bi bi-house-door',
          routes: '',
        },
      ],
    },
   
  ];
  constructor() {}
  ngAfterViewInit(): void {}

  ngOnInit() {}
  onafterViewInit() {}

  onDivClick(index: number) {
    this.datas[index - 1].sys.isImportant = !this.datas[index - 1].sys.isImportant;
    const selectedDiv = this.myDivElements.toArray()[index - 1];

    if (this.datas[index - 1].sys.isImportant) {
      selectedDiv.nativeElement.style.display = 'block';
      selectedDiv.nativeElement.style.height = 'auto';
      selectedDiv.nativeElement.style.opacity = '1';
      selectedDiv.nativeElement.style.transition = '0.5s ease-in-out';
    } else {
      selectedDiv.nativeElement.style.display = 'none';
      selectedDiv.nativeElement.style.transition = 'none';
      selectedDiv.nativeElement.style.height = '0px';
      selectedDiv.nativeElement.style.opacity = '0';
    }
  }
}
