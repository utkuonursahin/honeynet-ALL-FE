import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen max-w-screen">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
