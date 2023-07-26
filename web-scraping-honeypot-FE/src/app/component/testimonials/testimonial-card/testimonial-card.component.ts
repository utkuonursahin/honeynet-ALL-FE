import {Component, Input} from '@angular/core';
import {Testimonial} from "../../../interface/Testimonial";

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
})
export class TestimonialCardComponent {
  @Input() testimonial!: Testimonial;
}
