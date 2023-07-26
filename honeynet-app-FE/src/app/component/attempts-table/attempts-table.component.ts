import {Component, OnDestroy, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {GenericResponse} from "../../interface/GenericResponse";
import {SuspiciousActivityService} from "../../service/suspicious-activity.service";
import {SuspiciousActivity} from "../../model/SuspiciousActivity";
import {SuspiciousActivityFilter} from "../../interface/SuspiciousActivityFilter";
import {PaginatedSuspiciousActivities} from "../../interface/PaginatedSuspiciousActivities";
import {PaginationSettings} from "../../interface/PaginationSettings";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {User} from "../../model/User";
import {UserRole} from "../../enum/UserRole";
@Component({
  selector: 'app-attempts-table',
  templateUrl: './attempts-table.component.html',
})

export class AttemptsTableComponent implements OnDestroy{
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

  private readonly user: User = JSON.parse(localStorage.getItem('user')!);
  private readonly firm = JSON.parse(localStorage.getItem('firm') || '{}');

  constructor(private suspiciousActivityService:SuspiciousActivityService) {
    this.subscription = this.suspiciousActivityService.getSuspiciousActivities(
      this.filter,
      this.paginationSettings,
      this.firm.id).subscribe(this.subscribeSettings);
  }

  toggleDetailsModal(){this.isDetailsModalOpened = !this.isDetailsModalOpened;}

  handleModalToggle(event: MouseEvent){
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
      this.paginationSettings,
      this.firm.id).subscribe(this.subscribeSettings);

  }

  onPageChange(event:PageEvent){
    this.paginationSettings.currentPage = event.pageIndex;
    this.paginationSettings.currentSize = event.pageSize;
    this.subscription = this.suspiciousActivityService.getSuspiciousActivities(
      this.filter,
      this.paginationSettings,
      this.firm.id).subscribe(this.subscribeSettings);

  }

  @ViewChild('paginator') paginator!: MatPaginator;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
