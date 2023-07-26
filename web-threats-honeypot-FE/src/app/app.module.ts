import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PageDashboardComponent } from './page/page-dashboard/page-dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PageSignupComponent } from './page/page-signup/page-signup.component';
import { PageResetPasswordComponent } from './page/page-reset-password/page-reset-password.component';
import {HttpClientModule} from "@angular/common/http";
import { DashboardCardComponent } from './component/dashboard-card/dashboard-card.component';
import {NgOptimizedImage} from "@angular/common";
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageDashboardComponent,
    PageSignupComponent,
    PageResetPasswordComponent,
    DashboardCardComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgOptimizedImage,
        CookieModule.withOptions()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
