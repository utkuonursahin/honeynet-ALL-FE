import {Component, Input} from '@angular/core';
import {Faq} from "../../../interface/Faq";

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
})
export class FaqCardComponent {
  protected isClicked = false;
  @Input() faq!: Faq;
  handleClick() {
    this.isClicked = !this.isClicked;
  }
}
