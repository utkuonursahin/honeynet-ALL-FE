import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {EmailInfo} from "../../../../model/Email-info";
import {SuspiciousActivityService} from "../../../../service/suspicious-activity.service";
import {EmailInfoService} from "../../../../service/email-info.service";
import {PotService} from "../../../../service/pot.service";
import {SuspiciousActivityFilter} from "../../../../interface/SuspiciousActivityFilter";
import {PaginationSettings} from "../../../../interface/PaginationSettings";
import {GenericResponse} from "../../../../interface/GenericResponse";
import {PaginatedSuspiciousActivities} from "../../../../interface/PaginatedSuspiciousActivities";
import {SuspiciousActivity} from "../../../../model/SuspiciousActivity";
import {map, Subscription} from "rxjs";
import {PaginatedEmailInfo} from "../../../../interface/PaginatedEmailInfo";

@Component({
  selector: 'app-received-mail',
  templateUrl: './received-mail.component.html',
})
export class ReceivedMailComponent implements OnInit,OnDestroy{
  @Input() selectedInfo!: EmailInfo;
  companyName: string = "BEAM Technology";
  address: string = "ODTU Teknokent Galyum Binası No:D:1";
  phoneNumber: string = "216 55 48";
  companyEmail: string = "cengiz@beam.com";
  selectedSuspicious!: SuspiciousActivity

  constructor(private suspiciousService:SuspiciousActivityService) {

  }
  public subscription:Subscription = new Subscription();

  suspiciousRequestData!:SuspiciousActivity[];


  private readonly subscribeSettings: any = {
    next: ({data:{activityList,...settings}}: GenericResponse<PaginatedSuspiciousActivities>) => {
      this.suspiciousRequestData = activityList;
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if ('selectedInfo' in changes) {
  //     // const subscription = this.suspiciousService.getSuspiciousActivity(this.selectedInfo.suspiciousActivityRef.toString()).subscribe(this.subscribeSettings);
  //   }
  // }


  ngOnInit(): void {
    this.suspiciousService.getSuspiciousActivity(this.selectedInfo.suspiciousActivityRef).subscribe((response)=>{
      this.selectedSuspicious = response.data;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
