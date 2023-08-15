import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="box-border cursor-default bg-gray-900 min-h-screen max-w-screen font-Poppins grid grid-rows-[10vh,min-content,10vh]">
      <app-header></app-header>
      <main class="grid grid-cols-[10vw,1fr,10vw] gap-12">
        <app-hero style="{{hostLayoutCenter}}"></app-hero>
        <app-offers style="{{hostLayoutCenter}}"></app-offers>
        <app-features style="{{hostLayoutCenter}}"></app-features>
        <app-devices style="{{hostLayoutFullWidth}}"></app-devices>
        <app-faq style="{{hostLayoutCenter}}"></app-faq>
        <app-testimonials style="{{hostLayoutCenter}}"></app-testimonials>
        <app-contact style="{{hostLayoutFullWidth}}"></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  protected hostLayoutCenter: string = "grid-column-start: 2; grid-column-end: 3;";
  protected hostLayoutFullWidth: string = "grid-column-start: 1; grid-column-end: 4;";
}
