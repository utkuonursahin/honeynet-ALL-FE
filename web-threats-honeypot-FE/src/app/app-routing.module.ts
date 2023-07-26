import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./page/page-login/page-login.component";
import {PageDashboardComponent} from "./page/page-dashboard/page-dashboard.component";
import {PageSignupComponent} from "./page/page-signup/page-signup.component";
import {PageResetPasswordComponent} from "./page/page-reset-password/page-reset-password.component";

const routes: Routes = [
  {path:'',component:PageLoginComponent},
  {path:"dashboard",component:PageDashboardComponent},
  {path:"signup",component:PageSignupComponent},
  {path:"reset-password",component:PageResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
