import {Component, ViewChild} from '@angular/core';
import {SuspiciousActivity} from "../../model/SuspiciousActivity";
import {Subscription} from "rxjs";
import {GenericResponse} from "../../interface/GenericResponse";
import {PaginatedSuspiciousActivities} from "../../interface/PaginatedSuspiciousActivities";
import {PaginationSettings} from "../../interface/PaginationSettings";
import {SuspiciousActivityFilter} from "../../interface/SuspiciousActivityFilter";
import {User} from "../../model/User";
import {SuspiciousActivityService} from "../../service/suspicious-activity.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-suspicious-table',
  templateUrl: './suspicious-table.component.html'
})
export class SuspiciousTableComponent {
  protected suspiciousRequestData: SuspiciousActivity[] = [];
  protected selectedSuspicious!: SuspiciousActivity;

  protected isDetailsModalOpened: boolean = false;

  private subscription: Subscription = new Subscription();

  private readonly subscribeSettings: any = {
    next: ({data:{activityList,...settings}}: GenericResponse<PaginatedSuspiciousActivities>) => {
      this.suspiciousRequestData = activityList;
      this.paginationSettings = settings;
    }
  }

  protected paginationSettings: PaginationSettings = {
    currentPage: 0, currentSize: 10,
    totalPage: 0, totalSize: 0
  }

  private filter: SuspiciousActivityFilter = {
    originFilter: '',
    categoryFilters: [],
    dateFilters: []
  }

  private readonly user: User = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(private suspiciousActivityService:SuspiciousActivityService) {
    this.subscription = this.suspiciousActivityService.getSuspiciousActivities(
      this.filter,
      this.paginationSettings).subscribe(this.subscribeSettings);
  }

  toggleDetailsModal(){this.isDetailsModalOpened = !this.isDetailsModalOpened;}

  handleDetailsModalToggle(event: MouseEvent){
    const row = (event.target as HTMLElement).closest('tr') || (event.target as HTMLElement).closest('.overlay');
    if(!row) return;
    this.toggleDetailsModal();
    const id = row.getAttribute('id');
    this.selectedSuspicious = this.suspiciousRequestData.find(suspicious => suspicious.id === id)!;
  }

  onFilterEvent(filter: SuspiciousActivityFilter){
    this.filter = filter;
    this.paginator.pageIndex = 0;
    this.paginationSettings.currentPage = 0;
    this.subscription = this.suspiciousActivityService.getSuspiciousActivities(
      this.filter,
      this.paginationSettings).subscribe(this.subscribeSettings);
  }

  onPageChangeEvent(event:PageEvent){
    this.paginationSettings.currentPage = event.pageIndex;
    this.paginationSettings.currentSize = event.pageSize;
    this.subscription = this.suspiciousActivityService.getSuspiciousActivities(
      this.filter,
      this.paginationSettings).subscribe(this.subscribeSettings);
  }

  @ViewChild('paginator') paginator!: MatPaginator;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
