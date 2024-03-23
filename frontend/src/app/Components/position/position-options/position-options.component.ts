/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionModel } from 'src/Model/PositionModel';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-position-options',
  templateUrl: './position-options.component.html',
  styleUrls: ['./position-options.component.scss']
})
export class PositionOptionsComponent implements OnInit {
  constructor(
    private Service: PositionServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationDialogService: ConfirmationDialogService
  ) {}
  @Input() selectedID: string;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  id: string;
  data: PositionModel;

  ngOnInit(): void {
    this.GetPositionID();
  }

  GetPositionID() {
    this.Service.GetPositionByID(this.selectedID).subscribe((res) => {
      this.data = res;
    });
  }

  Add(data: PositionModel) {
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to Add ?')
      .then((confirmed) => {
        if (confirmed) {
          this.Service.CreatePosition(data).subscribe((res) => {
            this.onSuccess.emit(res);
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  Update(position: PositionModel) {
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to Edit ?')
      .then((confirmed) => {
        if (confirmed) {
          this.onUpdate.emit(this.selectedID);
          this.Service.UpdatePosition(this.selectedID, position).subscribe((res) => {
            if (res) {
              this.onSuccess.emit();
            }
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
