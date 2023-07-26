import { Component } from '@angular/core';
import {Testimonial} from "../../interface/Testimonial";
import testimonialData from "../../../assets/data/testimonials.json";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent {
  protected testimonials: Testimonial[] = testimonialData;

}
