import { CommonModule } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BarcodeFormat, Result } from '@zxing/library';
import {ZXingScannerComponent, ZXingScannerModule} from '@zxing/ngx-scanner'
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { CheckOut, TimeKeeping } from 'src/Model/Workhours/TimeKeeping';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';
import { AuthService } from 'src/Services/auth.service';
import { NotificationComponent } from "../../../theme/shared/components/Notification/Notification.component";
import { SpinnerBetaComponent } from "../../../theme/shared/components/spinner-beta/spinner-beta.component";
@Component({
    selector: 'app-qrcode',
    templateUrl: './qrcode.component.html',
    styleUrls: ['./qrcode.component.scss'],
    standalone: true,
    imports: [ZXingScannerModule, CommonModule, RouterModule, FormsModule, NotificationComponent, SpinnerBetaComponent]
})
export default class QrcodeComponent {
scanCompleteHandler($event: Result) {
throw new Error('Method not implemented.');
}
availableDevices: MediaDeviceInfo[];
deviceCurrent: MediaDeviceInfo;
deviceSelected: string;
messageRequest 

formatsEnabled: BarcodeFormat[] = [
  BarcodeFormat.CODE_128,
  BarcodeFormat.DATA_MATRIX,
  BarcodeFormat.EAN_13,
  BarcodeFormat.QR_CODE,
];
  @ViewChild('scanner', { static: false })

  scanner: ZXingScannerComponent;
  flagchange:number=1
  NameChange:string='Check in'
  delaycode:boolean=true
  timekeeping:TimeKeeping
  data:any={}
  spinner : boolean = true

  @ViewChild(NotificationComponent) childnoti:NotificationComponent

  constructor(private service : AuthService,private services_workhour:WorkHourService, private router : Router) {
    this.data.id=''

  }
  ChangeCheck(flagchange:number){
    this.flagchange = flagchange
    if(flagchange==1)
    this.NameChange='Check in'
  else{
    this.NameChange='Check Out'
  }
  }
  onCodeResult(result:string)
  {
    if(this.delaycode==true){
      this.service.GetInforToLogin(result).subscribe((res)=>{
        this.spinner=false
        this.delaycode=false
        let date = new Date()
        this.timekeeping ={
          employeesID:res.id,
          lbdid:'1',
          day:date.getDate(),
          month:date.getMonth()+1,
          year:date.getFullYear(),
          hourCheckin:date.getHours(),
          minuteCheckin:date.getMinutes(),
        }
        this.data={
          id:res.id,
          name:res.firstName+' '+res.middleName+' '+res.lastName,
          date:this.timekeeping.day+'/'+this.timekeeping.month+'/'+this.timekeeping.year,
          time:this.timekeeping.hourCheckin+':'+this.timekeeping.minuteCheckin
        }
        this.spinner=true



        setTimeout(() => {
          this.delaycode = true;
      }, 3000);
      })
    }
    
  }
  Confirm(){
    if(this.flagchange==1){
      this.services_workhour.Checkin(this.timekeeping).subscribe((res)=>{
        if(res==1){
          this.messageRequest=' Check In Successed'
          this.childnoti.showSuccess(this.childnoti.successTpl)
        }else{
          this.messageRequest=' Check In Fail'
          this.childnoti.showDanger(this.childnoti.dangerTpl)
        }
        this.Cancel()


      })
    }else{
      let checkout: CheckOut={
          employeesID:this.timekeeping.employeesID,
          day:this.timekeeping.day,
          month:this.timekeeping.month,
          year:this.timekeeping.year,
          hourCheckout:this.timekeeping.hourCheckin,
          minuteCheckout:this.timekeeping.minuteCheckin,
      }
      this.services_workhour.Checkout(checkout).subscribe((res)=>{
        if(res==1){
          this.messageRequest=' Check Out Successed'
          this.childnoti.showSuccess(this.childnoti.successTpl)
        }else{
          this.messageRequest=' Check Out Fail'
          this.childnoti.showDanger(this.childnoti.dangerTpl)
        }
        this.Cancel()

      })
    }
  }
  Cancel(){
    this.data={}
    this.data.id=''
  }

}
