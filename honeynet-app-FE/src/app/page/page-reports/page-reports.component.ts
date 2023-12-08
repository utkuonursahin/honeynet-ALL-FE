import { Component } from '@angular/core';
import {Report} from "../../model/Report";
import {GenericResponse} from "../../interface/response/GenericResponse";
import {Observable} from "rxjs";
import {ReportService} from "../../service/report.service";

@Component({
  selector: 'app-page-reports',
  templateUrl: './page-reports.component.html'
})
export class PageReportsComponent {
  constructor(private reportService:ReportService) {
    this.reports$ = reportService.getAllReports();
  }
  protected isCreateReportModalOpened = false;
  protected reports$ = new Observable<GenericResponse<Report[]>>();
  protected onReportsNeedUpdate() {
    this.reports$ = this.reportService.getAllReports();
  }
}
