import { Component, Input,  OnDestroy, OnInit} from '@angular/core';
import {EmailInfo} from "../../../../model/Email-info";
import {SuspiciousActivityService} from "../../../../service/suspicious-activity.service";
import {SuspiciousActivity} from "../../../../model/SuspiciousActivity";
import { Subscription} from "rxjs";
import {EmailFooterConst} from "../../receiver-constants/footer-constant";

@Component({
  selector: 'app-received-mail',
  templateUrl: './received-mail.component.html',
})

export class ReceivedMailComponent implements OnInit,OnDestroy{
  @Input() selectedInfo!: EmailInfo;
  selectedSuspicious!: SuspiciousActivity

  constructor(private suspiciousService:SuspiciousActivityService) {
  }
  public subscription:Subscription = new Subscription();

  ngOnInit(): void {
    this.suspiciousService.getSuspiciousActivity(this.selectedInfo.suspiciousActivityRef).subscribe((response)=>{
      this.selectedSuspicious = response.data;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected readonly EmailFooterConst = EmailFooterConst;
}
