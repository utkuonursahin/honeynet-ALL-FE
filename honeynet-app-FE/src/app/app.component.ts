import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
	<div class="relative min-h-screen grid {{routeUrl === '/' ? 'grid-cols-1 grid-rows-1' : 'gap-8 p-8 grid-cols-[15vw,1fr] grid-rows-[8vh,calc(100vh-8vh-6rem)]' }}
	 overflow-hidden bg-neutral-900 max-w-screen font-Poppins">
    <ng-container *ngIf="routeUrl !== '/'">
      <app-header [page]="this.routeUrl.slice(1,this.routeUrl.length)" style="grid-row-start: 1; grid-row-end: 2; grid-column-start: 2; grid-column-end: 3;"/>
      <app-sidebar style="grid-row-start: 1; grid-row-end: 3;"/>
    </ng-container>
    <div class="overflow-x-hidden rounded-lg bg-neutral-800 shadow-md shadow-neutral-950">
      <router-outlet/>
      <p class="h-8 text-neutral-600 w-full text-center">Developed at BEAM Teknoloji A.Ş. All Rights Reserved &copy; 2023</p>
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
