import { Component } from '@angular/core';
import {SuspiciousActivityService} from "../../service/suspicious-activity.service";
import {SuspiciousActivity} from "../../model/SuspiciousActivity";
import {SuspiciousActivityFilter} from "../../interface/SuspiciousActivityFilter";

@Component({
  selector: 'app-last-trapped-sources',
  templateUrl: './last-trapped-sources.component.html'
})
export class LastTrappedSourcesComponent {
  protected suspiciousRequestData:SuspiciousActivity[] = [];
  protected totalSize:number = 0;
  private filter:SuspiciousActivityFilter = {
    originFilter: {source:'',country:''},
    categoryFilters: [],
    dateFilters: [new Date(Date.now() - 1000 * 60 * 60 *24).toISOString(), new Date(Date.now()).toISOString()],
  }
  private paginationSettings = {
    currentPage: 0,
    currentSize: 20,
    totalPage: 0,
    totalSize: 0,
  }
  constructor(private suspiciousActivityService:SuspiciousActivityService) {
    this.suspiciousActivityService.getSuspiciousActivities(this.filter, this.paginationSettings).subscribe(response => {
      this.suspiciousRequestData = response.data.activityList;
      this.totalSize = response.data.totalSize;
    });
  }

  onPageChange(event:any) {
    const btn = event.target.closest('.paginate');
    if(!btn) return;
    if(this.paginationSettings.currentPage + parseInt(btn.dataset.page) < 0) return;
    this.paginationSettings.currentPage += parseInt(btn.dataset.page);
    this.suspiciousActivityService.getSuspiciousActivities(this.filter, this.paginationSettings).subscribe(response => {
      this.suspiciousRequestData = response.data.activityList;
      this.totalSize = response.data.totalSize;
    });
  }
}
