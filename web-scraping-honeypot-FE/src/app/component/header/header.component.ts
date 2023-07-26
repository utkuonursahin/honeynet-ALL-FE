import { Component } from '@angular/core';
import {ScrawlDetectionService} from "../../service/scrawlDetection.service";
import {ScrawlDetails} from "../../interface/ScrawlDetails";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private scrawlDetectionService: ScrawlDetectionService) {}
  handleBotClick(event:MouseEvent){
    const scrawlDetails:ScrawlDetails = {
      targetElementId: (event.currentTarget as HTMLElement).id,
    }
    this.scrawlDetectionService.handleScrawlDetection(scrawlDetails);
  }
}
