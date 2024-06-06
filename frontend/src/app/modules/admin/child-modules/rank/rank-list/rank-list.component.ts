/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { RankModel } from 'src/Model/Rank/RankModel';
import { Router } from '@angular/router';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { Observable } from 'rxjs';
import { ConfirmationDialogService } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.service';
import { NotificationComponent } from '../../../..//shared/components/Notification/Notification.component';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss', '../../../../scss/shared/sreach.scss', '../../../../scss/shared/button.scss']
})
export class RankListComponent implements OnInit {
  constructor(
    private service: RankServiceService,
    private confirm: ConfirmationDialogService,
    private router: Router
  ) {}
  @Output() ranksChange: EventEmitter<RankModel[]> = new EventEmitter<RankModel[]>();
  @ViewChild(NotificationComponent) child: NotificationComponent;
  message:any
  datas: RankModel[];
  searchText: string = '';
  paging: Requestpaging = {
    keyword: '',
    pageindex: 1,
    pagesize: 10
  };
  ShowFormOptions: boolean = false;
  ShowForm: boolean = false;
  selectedID: string;
  PageCount: number = 1;
  spinner: boolean = false;
  ngOnInit(): void {
    this.GetPaging();
    this.ranksChange.emit(this.datas);
  }

  ClicktoShowFormAdd(): void {
    this.ShowFormOptions = !this.ShowFormOptions;
    this.ShowForm = !this.ShowForm;
    this.selectedID = '';
  }

  ButtonClickToUpdate(id: string) {
    this.ShowFormOptions = !this.ShowFormOptions;
    this.ShowForm = !this.ShowForm;
    this.selectedID = id;
  }

  OnSuccess() {
    this.ShowFormOptions = false;
    this.ShowForm = false;
    this.GetPaging()
  }

  onCancel(){
    this.ShowFormOptions = false;
    this.ShowForm = false;
  }

  Delete(event: any, id: string) {
    this.confirm.confirm('Please Confirm', 'You wanna delete id : ' + id).then((confirmed) => {
      if (confirmed) {
        this.service.DeleteRank(id).subscribe((res) => {
          this.NoficationAlert(res)

        });
      }
    });
  }

  onSearchChange() {
    this.GetPaging();
  }

  GetPaging() {
    this.paging.keyword = this.searchText;
    this.service.GetRankPaging(this.paging).subscribe((res) => {
      this.datas = res.items;
      this.PageCount = res.pageCount;
      this.spinner = true;
    });
  }

  PageChange(page: number): void {
    this.paging.pageindex = page;
    this.GetPaging();
  }
  NoficationAlert(flag:any){
    if (flag == 1) {
      this.message = 'success';
      setTimeout(() => {
        this.child.showSuccess(this.child.successTpl);
      }, 1);
      this.OnSuccess()
    } else {
      this.message = 'faill';
      this.child.showDanger(this.child.dangerTpl);
    }
  }
  GetAll(rank: RankModel) {
    this.service.GetRank().subscribe((res) => {
      this.datas = res;
      return rank;
    });
  }
}
