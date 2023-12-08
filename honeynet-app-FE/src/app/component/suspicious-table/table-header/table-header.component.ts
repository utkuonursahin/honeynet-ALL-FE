import {Component, EventEmitter, Output} from '@angular/core';
import {PotCategory} from "../../../enum/PotCategory";
import {SuspiciousActivityFilter} from "../../../interface/suspiciousActivity/SuspiciousActivityFilter";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
})
export class TableHeaderComponent {
  protected isCategoryFilterOpened: boolean = false;
  protected isDateFilterOpened: boolean = false;
  protected isOriginFilterOpened: boolean = false;

  protected suspiciousActivityFilter: SuspiciousActivityFilter = {
    originFilter: {source:'',country:''},
    categoryFilters: [],
    dateFilters: []
  }

  constructor(private toastrService: ToastrService ) {}

  @Output() filterEvent: EventEmitter<SuspiciousActivityFilter> = new EventEmitter<SuspiciousActivityFilter>();

  emitFilterEvent(){
    this.filterEvent.emit(this.suspiciousActivityFilter);
    this.toastrService.success('Filters are applied', 'Filter Success ',{
      toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-green-500 text-neutral-100',
    });
  }

  toggleCategoryFilter(){this.isCategoryFilterOpened = !this.isCategoryFilterOpened;}
  toggleDateFilter(){this.isDateFilterOpened = !this.isDateFilterOpened;}
  toggleOriginFilter(){this.isOriginFilterOpened = !this.isOriginFilterOpened;}

  setCategoryFilters(category: PotCategory){
    if(this.suspiciousActivityFilter.categoryFilters.includes(category)){
      this.suspiciousActivityFilter.categoryFilters = this.suspiciousActivityFilter.categoryFilters.filter(exist => exist !== category)
    } else {
      this.suspiciousActivityFilter.categoryFilters.push(category);
    }
    this.emitFilterEvent();
  }

  setDateFilters(dateFilters: string[]){
    this.suspiciousActivityFilter.dateFilters = dateFilters;
    this.emitFilterEvent();
  }

  setOriginFilter(originFilter: string){
    this.suspiciousActivityFilter.originFilter = {source: originFilter, country: ''};
    this.emitFilterEvent();
    this.toggleOriginFilter();
  }
}
