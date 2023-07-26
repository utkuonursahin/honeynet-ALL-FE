import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageLoginComponent} from "./page/page-login/page-login.component";
import {PagePotsComponent} from "./page/page-pots/page-pots.component";
import {PageAttemptsComponent} from "./page/page-attempts/page-attempts.component";
import {PageProfileComponent} from "./page/page-profile/page-profile.component";
import {RouteGuard} from "./guards/route.guard";
import {PageEmailReceiversComponent} from "./page/page-email-receivers/page-email-receivers.component";
import {PageDashboardComponent} from "./page/page-dashboard/page-dashboard.component";
import {PageFirmsComponent} from "./page/page-firms/page-firms.component";

const routes: Routes = [
	{path: '', component: PageLoginComponent},
  {path:'firms',component:PageFirmsComponent,canActivate: [RouteGuard]},
  {path:'dashboard',component:PageDashboardComponent,canActivate: [RouteGuard]},
	{path: 'pots', component: PagePotsComponent,canActivate: [RouteGuard]},
  {path:'attempts',component:PageAttemptsComponent,canActivate: [RouteGuard]},
  {path: 'profile', component: PageProfileComponent,canActivate: [RouteGuard]},
  {path: 'email-receivers',component:PageEmailReceiversComponent,canActivate: [RouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
