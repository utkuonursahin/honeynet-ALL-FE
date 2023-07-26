import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ScrawlDetectionService} from "../../service/scrawlDetection.service";
import {ScrawlDetails} from "../../interface/ScrawlDetails";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  protected contactForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private scrawlDetectionService: ScrawlDetectionService ) {}

  handleBotChange(event: Event){
    const scrawlDetails:ScrawlDetails = {
      targetElementId: (event.target as HTMLElement).id,
    }
    this.scrawlDetectionService.handleScrawlDetection(scrawlDetails);
  }
}
