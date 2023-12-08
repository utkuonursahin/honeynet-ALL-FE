import {Component, EventEmitter, Output} from '@angular/core';
import {ReportService} from "../../../service/report.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-modal-generate-report',
  templateUrl: './modal-generate-report.component.html'
})
export class ModalGenerateReportComponent {
  @Output() protected closeModalEvent = new EventEmitter<boolean>();
  @Output() protected reportGenerationEvent = new EventEmitter<boolean>();
  constructor(private reportService: ReportService, private toastrService: ToastrService) {}

  protected reportContents: any = {
    byCategory: true,
    byCountry: true,
    bySource: true,
  }

  generateReport() {
    this.reportService.createReport(this.reportContents).subscribe({
      next: ({data}) => {
        data ?
        this.toastrService.success('Report generated', 'Success',{
          toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-green-500 text-neutral-100'
        }) :
        this.toastrService.error('Report generation failed', 'Error',{
          toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-red-500 text-neutral-100',
        });
        this.emitGenerateReportEvent();
      }
    });
  }

  emitModalCloseEvent() {
    this.closeModalEvent.emit(true);
  }

  emitGenerateReportEvent() {
    this.reportGenerationEvent.emit(true);
  }

  onChange(event: any) {
    const selections = event.value.map((item: string) => "by" + item)
    Object.keys(this.reportContents).forEach((key: string) => {
      this.reportContents[key] = selections.includes(key);
    })
  }
}
