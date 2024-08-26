import { Component, OnInit } from '@angular/core';
import { createSpinner, hideSpinner, showSpinner } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-spinner-alpha',
  templateUrl: './spinner-alpha.component.html',
  styleUrls: ['./spinner-alpha.component.scss']
})
export class SpinnerAlphaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    //createSpinner() method is used to create spinner
    createSpinner({
      // Specify the target for the spinner to show
      target: document.getElementById('container') as any
    });

    // showSpinner() will make the spinner visible
    showSpinner((document as any).getElementById('container'));

  
  }
}
