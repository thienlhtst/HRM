import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { ToastService } from './toast-service.service';
import { ToastscontainerComponent} from './toastscontainer/toastscontainer.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-Notification',
  standalone:true,
	imports: [NgbTooltipModule, ToastscontainerComponent],
  templateUrl: './Notification.component.html',
  styleUrls: ['./Notification.component.css']
})
export class NotificationComponent implements OnInit,OnDestroy {
  toastService = inject(ToastService);
  @Input()
    type:string
    @Input() message:string='test'

    @ViewChild("successTpl") public successTpl: TemplateRef<any>;

  constructor() { }
  showStandard(template: TemplateRef<any>) {
		this.toastService.show({ template });
	}
  public showSuccess(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000 });
	}
  showDanger(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-danger text-light', delay: 15000 });
	}
  ngOnDestroy(): void {
		this.toastService.clear();
	}

  ngOnInit() {
  }

}
