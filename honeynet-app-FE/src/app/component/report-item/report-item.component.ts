import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Report} from "../../model/Report";
import {ReportService} from "../../service/report.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html'
})
export class ReportItemComponent {
  @Input() report!: Report;
  @Output() reportDeletionEvent = new EventEmitter<boolean>();
  constructor(private reportService: ReportService, private toastrService: ToastrService){}

  onReportOpen() {
    this.reportService.getReport(this.report.id).subscribe(({data}) => {
      const binaryData = atob(data);
      const blob = new Blob([new Uint8Array(binaryData.length).map((_, i) => binaryData.charCodeAt(i))], {
        type: 'application/pdf'
      });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  onReportDelete() {
    this.reportService.deleteReport(this.report.id).subscribe(({data}) => {
      data ? this.toastrService.success('Report deleted successfully', 'Success',{
          toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-green-500 text-neutral-100'
        }) :
        this.toastrService.error('Report deletion failed', 'Error',{
          toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-red-500 text-neutral-100'
        });
      this.reportDeletionEvent.emit(true);
    });
  }
}
