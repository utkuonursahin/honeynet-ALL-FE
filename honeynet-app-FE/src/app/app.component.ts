import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
	<div class="relative min-h-screen grid  {{routeUrl === '/' ? 'grid-cols-1 grid-rows-1' : 'grid-cols-[17.5vw,1fr] grid-rows-[8vh,87.5vh,4.5vh]' }}
	 overflow-hidden bg-neutral-800 max-w-screen font-Poppins">
    <ng-container *ngIf="routeUrl !== '/'">
      <app-header [page]="routeUrl.slice(1,routeUrl.length)" style="grid-row-start: 1; grid-row-end: 2; grid-column-start: 2; grid-column-end: 3;"/>
      <app-sidebar style="grid-row-start: 1; grid-row-end: 4;"/>
      <app-footer style="grid-row-start: 3; grid-row-end: 4; grid-column-start: 2; grid-column-end: 3;"/>
    </ng-container>
    <div class="overflow-x-hidden">
      <router-outlet/>
    </div>
	</div>`
})
export class AppComponent implements OnInit{
  protected routeUrl: string = '';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
    .pipe(filter((e) => e instanceof NavigationEnd))
    .subscribe((event:any) => {this.routeUrl = event.url;});
  }
}
