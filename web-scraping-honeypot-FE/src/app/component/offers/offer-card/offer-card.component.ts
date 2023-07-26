import {Component, Input} from '@angular/core';
import {Offer} from "../../../interface/Offer";
import {ScrawlDetectionService} from "../../../service/scrawlDetection.service";
import {ScrawlDetails} from "../../../interface/ScrawlDetails";

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html'
})
export class OfferCardComponent {
  @Input() offer!: Offer;
  constructor(private scrawlDetectionService: ScrawlDetectionService) {}
  handleBotClick(event:MouseEvent){
    const scrawlDetails:ScrawlDetails = {
      targetElementId: (event.target as HTMLElement).id,
    }
    this.scrawlDetectionService.handleScrawlDetection(scrawlDetails);
  }
}
