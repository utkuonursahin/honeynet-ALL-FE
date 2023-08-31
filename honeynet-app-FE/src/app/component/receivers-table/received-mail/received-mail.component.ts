import { Component, Input,  OnDestroy, OnInit} from '@angular/core';
import {EmailInfo} from "../../../model/EmailInfo";
import {SuspiciousActivityService} from "../../../service/suspicious-activity.service";
import {SuspiciousActivity} from "../../../model/SuspiciousActivity";
import { Subscription} from "rxjs";
import {EmailFooterConst} from "../email-constants/footer-constant";

@Component({
  selector: 'app-received-mail',
  templateUrl: './received-mail.component.html',
})

export class ReceivedMailComponent implements OnInit,OnDestroy{
  @Input() selectedInfo!: EmailInfo;

  activityInstance : SuspiciousActivity = {
    id: '',
    origin: {
      source:'',
      lat:'',
      lng:'',
      country:''
    },
    category: '',
    potName: '',
    payload: {
      username: '',
      password: '',
      path: '',
      targetElementId: '',
      subject: '',
      filename: ''
    },
    targetElementId: '',
    date: new Date()
  };


  constructor(private suspiciousService:SuspiciousActivityService) {
  }

  public subscription:Subscription = new Subscription();

  ngOnInit(): void {
    this.suspiciousService.getSuspiciousActivity(this.selectedInfo.suspiciousActivityRef).subscribe((response)=>{
      this.activityInstance = response.data;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  protected readonly EmailFooterConst = EmailFooterConst;
}
