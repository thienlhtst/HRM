import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MathUtils } from '@zxing/library';
import { throws } from 'assert';
import { HomelistLabour } from 'src/Model/DayinLabourhour/HomelistLabour';
import { LabourHourService } from 'src/Services/LabourHour/LabourHour.service';
import { NotificationComponent } from '../../../shared/components/Notification/Notification.component';

@Component({
  selector: 'app-labourday',
  templateUrl: './labourday.component.html',
  styleUrls: ['./labourday.component.css', '../../../../../scss/shared/sreach.scss']
})
export class LabourdayComponent implements OnInit {
  ShowForm: boolean = false;
  message: string = '';
  currentdata: number = 0;
  currentlabour: number = 0;
  currentidlabour: number = 0;
  datarespone: HomelistLabour[];
  LabourhourSelects: any[] = [];
  flagformday: boolean = false;
  flagformhour: boolean = false;
  @ViewChild(NotificationComponent) child: NotificationComponent;
  constructor(
    private service: LabourHourService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.service.GetAll().subscribe((res) => {
      this.datarespone = res;
      res.forEach((x) => {
        let LabourhourSelect = {
          id: x.id,
          name: x.name
        };
        if (LabourhourSelect.id != '1') this.LabourhourSelects.push(LabourhourSelect);
      });
    });
  }
  OpenAddorEdit(data: any) {
    if (!this.ShowForm) {
      if (!this.flagformday) this.flagformday = true;
      if (data.id == this.currentdata) {
        if (!this.flagformhour) this.ShowForm = !this.ShowForm;
        else this.flagformday = !this.flagformday;
      } else this.ShowForm = true;
    } else {
      if (data.id == this.currentdata) {
        this.flagformday = !this.flagformday;
        if (data.idlabour != this.currentlabour) this.flagformday = true;
      } else {
        this.flagformday = true;
      }
    }
    if (!this.flagformday && !this.flagformhour) this.ShowForm = !this.ShowForm;
    this.currentdata = data.id;
    this.currentlabour = data.idlabour;
  }
  OpenAddorEditLabourhour(id: any) {
    if (!this.ShowForm) {
      if (!this.flagformhour) {
        this.flagformhour = true;
      }
      if (id == this.currentidlabour) {
        if (!this.flagformday) this.ShowForm = !this.ShowForm;
        else this.flagformhour = !this.flagformhour;
      } else {
        this.ShowForm = true;
      }
    } else {
      if (id == this.currentidlabour) this.flagformhour = !this.flagformhour;
      else this.flagformhour = true;
    }
    if (!this.flagformday && !this.flagformhour) this.ShowForm = !this.ShowForm;
    this.currentidlabour = id;
  }
  closeform(flag:number){
    if(!this.flagformday &&this.flagformhour )
    this.flagformhour=false
    if(this.flagformday &&!this.flagformhour )
    this.flagformday=false
    if(this.flagformday &&this.flagformhour ){
      if(flag==1) this.flagformday=false
      else(this.flagformhour=false)
    }else this.ShowForm=false
  }
  onConfirm(flag: any) {
    if (flag == 1) {
      this.message = 'success';
      this.child.showSuccess(this.child.successTpl);
      this.closeform(1)
      this.service.GetAll().subscribe((res) => {
        this.datarespone = res;
      })
    } else {
      this.message = 'fail';
      this.child.showDanger(this.child.dangerTpl);
    }
  }
}
