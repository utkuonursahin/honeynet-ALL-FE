import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {EmailInfoService} from "../../service/email-info.service";
import {EmailInfo} from "../../model/EmailInfo";
import {Subscription} from "rxjs";
import {GenericResponse} from "../../interface/GenericResponse";
import {PaginatedEmailInfo} from "../../interface/PaginatedEmailInfo";
import {PaginationSettings} from "../../interface/PaginationSettings";
import {EmailInfoFilter} from "../../interface/EmailInfoFilter";
import {data} from "autoprefixer";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {SuspiciousActivity} from "../../model/SuspiciousActivity";
import {SuspiciousActivityService} from "../../service/suspicious-activity.service";
import {SuspiciousActivityFilter} from "../../interface/SuspiciousActivityFilter";
import {PaginatedSuspiciousActivities} from "../../interface/PaginatedSuspiciousActivities";

@Component({
  selector: 'app-receivers-table',
  templateUrl: './receivers-table.component.html',
  providers:[EmailInfoService]
})
export class ReceiversTableComponent implements OnDestroy{

  constructor(public emailInfoService:EmailInfoService) {
    this.subscription = emailInfoService.getFilteredMails(this.emailInfoFilter,this.paginationConfigs).subscribe(this.subscriptionConfig)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  protected selectedInfo!:EmailInfo;
  public emailData:EmailInfo[]=[];
  public subscription:Subscription = new Subscription();
  protected isDetailsModalOpened: boolean = false;

  private readonly subscriptionConfig={
    next:({data:{emailInfoList,...settings}}:GenericResponse<PaginatedEmailInfo>)=>{
      this.emailData = emailInfoList;
      this.paginationConfigs = settings;
    }
  }
  protected paginationConfigs:PaginationSettings={
    currentPage:0,
    currentSize:10,
    totalPage:0,
    totalSize:0
  }
  emailInfoFilter:EmailInfoFilter={
    dateFilters: [],
    receiverFilter: ""
  }
  onFilter(filter: EmailInfoFilter){
    this.emailInfoFilter = filter;
    this.paginator.pageIndex = 0;
    this.paginationConfigs.currentPage=0;
    this.emailInfoService.getFilteredMails(this.emailInfoFilter,this.paginationConfigs).subscribe(this.subscriptionConfig);
  }
  toggleDetailsModal(){this.isDetailsModalOpened = !this.isDetailsModalOpened;}
  handleDetailsModalToggle(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const row = clickedElement.closest('tr') || (event.target as HTMLElement).closest('.overlay');
    if (!row) return;
    this.toggleDetailsModal();
    const id = row.getAttribute('id');
    this.selectedInfo = this.emailData.find(info => info.id === id)!;
  }
  onPageChangeEvent(event:PageEvent){
    this.paginationConfigs.currentPage = event.pageIndex;
    this.paginationConfigs.currentSize = event.pageSize;
    this.subscription = this.emailInfoService.getFilteredMails(this.emailInfoFilter,this.paginationConfigs).subscribe(this.subscriptionConfig);
  }
  @ViewChild('paginator') paginator!: MatPaginator;
}
