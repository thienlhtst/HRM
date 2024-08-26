/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../toast-service.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-toastscontainer',
  standalone:true,
  imports: [NgbToastModule, NgTemplateOutlet,CommonModule],
  templateUrl: './toastscontainer.component.html',
  styleUrls: ['./toastscontainer.component.css'],
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastscontainerComponent implements OnInit {
	toastService = inject(ToastService);
  constructor() { }

  ngOnInit() {
  }

}
