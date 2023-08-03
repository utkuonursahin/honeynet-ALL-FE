import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PotCategory} from "../../../../enum/PotCategory";

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html'
})
export class CategoryFilterComponent {
  protected isBruteForceSelected: boolean = false;
  protected isPathTraversalSelected: boolean = false;
  protected isWebScrapingSelected: boolean = false;
  protected isEmailSelected: boolean = false;
  protected isUnrestrictedFileUploadSelected: boolean = false;

  @Input() isCategoryFilterOpened: boolean = false;
  @Output() categoryFilterChangeEvent: EventEmitter<PotCategory> = new EventEmitter<PotCategory>();

  emitCategoryFilterChangeEvent(event: Event){
    const target = event.target as HTMLInputElement
    const value = target.getAttribute('data-category') as PotCategory;
    if(value === PotCategory.BRUTE_FORCE){
      this.isBruteForceSelected = !this.isBruteForceSelected;
    } else if(value === PotCategory.PATH_TRAVERSAL){
      this.isPathTraversalSelected = !this.isPathTraversalSelected;
    } else if(value === PotCategory.WEB_SCRAPING){
      this.isWebScrapingSelected = !this.isWebScrapingSelected;
    } else if(value === PotCategory.EMAIL){
      this.isEmailSelected = !this.isEmailSelected;
    } else if(value === PotCategory.UNRESTRICTED_FILE_UPLOAD){
      this.isUnrestrictedFileUploadSelected = !this.isUnrestrictedFileUploadSelected;
    }
    this.categoryFilterChangeEvent.emit(value);
  }
}
