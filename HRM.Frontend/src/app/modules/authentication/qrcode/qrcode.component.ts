/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { EWAServiceService } from 'src/Services/EmployeeWithAllowance/ewaservice.service';
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
import { AuthService } from 'src/Services/Auth/auth.service';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { EWAModel } from 'src/Model/EmployeeWithAllowance/EWAModel';
import { EwaAutoModel } from 'src/Model/EmployeeWithAllowance/EwaAutoModel';
import { NotificationComponent } from '../../share/components/Notification/Notification.component';
import { SpinnerBetaComponent } from '../../share/components/spinner-beta/spinner-beta.component';
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
availableDevices: MediaDeviceInfo[]=[];
deviceCurrent: MediaDeviceInfo | undefined;
deviceSelected: string='';
messageRequest:any

formatsEnabled: BarcodeFormat[] = [
  BarcodeFormat.CODE_128,
  BarcodeFormat.DATA_MATRIX,
  BarcodeFormat.EAN_13,
  BarcodeFormat.QR_CODE,
];
  @ViewChild('scanner', { static: false })

  scanner: ZXingScannerComponent | undefined;
  flagchange:number=1
  NameChange:string='Check in'
  delaycode:boolean=true
  timekeeping:TimeKeeping={
    employeesID: '',
    lbdid: '',
    day: 0,
    month: 0,
    year: 0,
    hourCheckin: 0,
    minuteCheckin: 0
  }
  data:any={}
  spinner : boolean = true
  EWAData : EwaAutoModel={
    AllowanceID: '',
    Day: 0,
    Month: 0,
    Year: 0
  }

  @ViewChild(NotificationComponent) childnoti:NotificationComponent | undefined

  constructor(private service : AuthService,private ewaService : EWAServiceService,private services_workhour:WorkHourService,private AllowanceService : AllowanceServiceService, private router : Router) {
    this.data.id=''
    this.askForCameraPermission()
  }
  askForCameraPermission() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          // you can now use this stream for video source
        })
        .catch(err => {
          // handle the error of user denying access
          console.error("The following error occurred: " + err);
        });
    } else {
      console.error("getUserMedia is not supported by your browser");
    }
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
          if(this.childnoti&& this.childnoti.successTpl)
          this.childnoti.showSuccess(this.childnoti.successTpl)
        }else{
          this.messageRequest=' Check In Fail'
          if(this.childnoti&& this.childnoti.dangerTpl)
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
          if(this.childnoti&& this.childnoti.successTpl)
          this.childnoti.showSuccess(this.childnoti.successTpl)
          let date = new Date()
          this.AllowanceService.getAllowance().subscribe((AlloRes)=>{
            AlloRes.forEach((item)=>{
              const id = item.id
              this.EWAData ={
                AllowanceID : id,
                Day : date.getDate(),
                Month : date.getMonth() + 1 ,
                Year : date.getFullYear()
              }
              console.log(this.EWAData)
              this.ewaService.AutoEWA(this.EWAData).subscribe()
            })
          })
        }else{
          this.messageRequest=' Check Out Fail'
          if(this.childnoti&& this.childnoti.dangerTpl)
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
