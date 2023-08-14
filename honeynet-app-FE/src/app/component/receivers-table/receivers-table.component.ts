import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {EmailInfoService} from "../../service/email-info.service";
import {EmailInfo} from "../../model/Email-info";
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
export class ReceiversTableComponent implements OnInit, OnDestroy{
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected selectedInfo!:EmailInfo;
  protected requestedInfos:EmailInfo[]=[];
  public emailData:EmailInfo[]=[];
  receivedInfo!:EmailInfo;
  public subscription:Subscription = new Subscription();
  protected isDetailsModalOpened: boolean = false;
  // infosForMail!:EmailInfo;


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

  emailInfofilter:EmailInfoFilter={
    dateFilters: [],
    receiverFilter: ""
  }

  suspiciousFilter:SuspiciousActivityFilter={
    originFilter: null,
    categoryFilters: [],
    dateFilters: []
  }
  protected suspiciousRequestData: SuspiciousActivity[] = [];

  private readonly subscribeSettings: any = {
    next: ({data:{activityList,...settings}}: GenericResponse<PaginatedSuspiciousActivities>) => {
      this.suspiciousRequestData = activityList;
      this.paginationConfigs = settings;
    }
  }


  constructor(public emailInfo:EmailInfoService,private suspiciouService:SuspiciousActivityService) {
    this.subscription = emailInfo.getFilteredMails(this.emailInfofilter,this.paginationConfigs).subscribe(this.subscriptionConfig)
    // this.getFilteredEmails(this.filter);
  }



  onFilter(filter: EmailInfoFilter){
    this.emailInfofilter = filter;
    this.paginator.pageIndex = 0;
    this.paginationConfigs.currentPage=0;
    this.emailInfo.getFilteredMails(this.emailInfofilter,this.paginationConfigs).subscribe(this.subscriptionConfig);
  }


  toggleDetailsModal(){this.isDetailsModalOpened = !this.isDetailsModalOpened;}

  handleDetailsModalToggle(event: MouseEvent){
    const row = (event.target as HTMLElement).closest('tr') || (event.target as HTMLElement).closest('.overlay');
    // const row = event;
    if(!row) return;
    this.toggleDetailsModal();
    const id = row.getAttribute('id');
    // const id = row.id;
    this.selectedInfo = this.emailData.find(info => info.id === id)!;
    // this.selectedInfo = row;
  }



  onPageChangeEvent(event:PageEvent){
    this.paginationConfigs.currentPage = event.pageIndex;
    this.paginationConfigs.currentSize = event.pageSize;
    this.subscription = this.emailInfo.getFilteredMails(this.emailInfofilter,this.paginationConfigs).subscribe(this.subscriptionConfig);
  }
  @ViewChild('paginator') paginator!: MatPaginator;


  spanValueFromChild!:string;
  getSpanValue(value:string){
    this.spanValueFromChild = value;
    // console.log(this.spanValueFromChild);
    // return this.spanValueFromChild;
  }



  public addEmailInfo(newInfo:EmailInfo){
    try {
      this.emailInfo.addEmailInfo(newInfo).subscribe((response)=>{
        console.log("New email info has been created ",response);
      })
    }catch (exception){
      console.error("Control Panel Create exception",exception)
    }
  }
  public getEmailbyReceiver(receiver:string){
    try {
      this.emailInfo.getEmailbyReceiver(receiver).subscribe((response)=>{
        console.log(response);
      })
    }catch (exception){
      console.log("exception from getemailbyreceiver");
    }
  }

  public getEmailInfo(id:string){
    try {
      this.emailInfo.getEmail(id).subscribe((email)=>{
        console.log(email)
        this.receivedInfo = email.data;
      })
    }catch (exception){
      console.error("Control Panel Get exception",exception)
    }
  }
  public updateEmailInfo(id:string,updatedInfo:EmailInfo){
    try {
      this.emailInfo.updateEmail(id,updatedInfo).subscribe((response)=>{
        console.log("Selected email information updated ! ",response);
      })
    }catch (exception){
      console.error("Control Panel Update exception",exception);
    }
  }
  public deleteEmailInfo(id:string){
    try {
      this.emailInfo.deleteEmail(id).subscribe((email)=>{
        console.log("Selected email information has been removed with id : ", id);
      })
    }catch (exception){
      console.error("Control Panel Delete exception",exception);
    }
  }
  public deleteAllEmailInfos(){
    try {
      this.emailInfo.deleteAllEmail().subscribe((email)=>{
        console.log("All email informations have been removed");
      })
    }catch (exception){
      console.error("Control Panel Delete All exception");
    }
  }
}
