import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageLoginComponent} from "./page/page-login/page-login.component";
import {PagePotsComponent} from "./page/page-pots/page-pots.component";
import {PageSuspiciousComponent} from "./page/page-suspicious/page-suspicious.component";
import {PageProfileComponent} from "./page/page-profile/page-profile.component";
import {RouteGuard} from "./guards/route.guard";
import {PageEmailReceiversComponent} from "./page/page-email-receivers/page-email-receivers.component";
import {PageDashboardComponent} from "./page/page-dashboard/page-dashboard.component";
import {PageFirmsComponent} from "./page/page-firms/page-firms.component";
import {PageServersComponent} from "./page/page-servers/page-servers.component";
import {ReceiversTableComponent} from "./component/receivers-table/receivers-table.component";
import {PageReportsComponent} from "./page/page-reports/page-reports.component";

const routes: Routes = [
	{path: '', component: PageLoginComponent},
  {path:'firms',component:PageFirmsComponent,canActivate: [RouteGuard]},
  {path:'dashboard',component:PageDashboardComponent,canActivate: [RouteGuard]},
	{path: 'pots', component: PagePotsComponent,canActivate: [RouteGuard]},
  {path:'suspicious-activities',component:PageSuspiciousComponent,canActivate: [RouteGuard]},
  {path: 'profile', component: PageProfileComponent,canActivate: [RouteGuard]},
  {path: 'email-receivers',component:PageEmailReceiversComponent,canActivate: [RouteGuard]},
  {path: 'servers',component:PageServersComponent,canActivate: [RouteGuard]},
  {path: 'email-receivers', component:ReceiversTableComponent, canActivate:[RouteGuard]},
  {path: 'reports', component: PageReportsComponent, canActivate:[RouteGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
