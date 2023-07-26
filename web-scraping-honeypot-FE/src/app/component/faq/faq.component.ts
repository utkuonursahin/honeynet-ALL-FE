import {Component} from '@angular/core';
import {Faq} from "../../interface/Faq";
import FAQData from "../../../assets/data/faqs.json";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html'
})
export class FaqComponent {
  public FAQs: Faq[] = FAQData;
}
