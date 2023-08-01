import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageLoginComponent} from "./page/page-login/page-login.component";
import {PagePotsComponent} from './page/page-pots/page-pots.component';
import {FooterComponent} from './component/footer/footer.component';
import {PotItemComponent} from './component/pot-item/pot-item.component';
import {NgOptimizedImage} from "@angular/common";
import {CookieModule} from 'ngx-cookie';
import {PageAttemptsComponent} from './page/page-attempts/page-attempts.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import { TableHeaderComponent } from './component/page-attempts-table-parts/table-header/table-header.component';
import {TableItemComponent} from "./component/page-attempts-table-parts/table-item/table-item.component";
import { HeaderComponent } from './component/header/header.component';
import { OverlayComponent } from './component/overlay/overlay.component';
import { DetailsModalComponent } from './component/page-attempts-table-parts/details-modal/details-modal.component';
import {EmailPotSettings} from "./component/pot-item/pot-item-settings/email-pot-settings/email-pot-settings";
import { CategoryFilterComponent } from './component/page-attempts-table-parts/table-header/category-filter/category-filter.component';
import { DateFilterComponent } from './component/page-attempts-table-parts/table-header/date-filter/date-filter.component';
import { OriginFilterComponent } from './component/page-attempts-table-parts/table-header/origin-filter/origin-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PageProfileComponent } from './page/page-profile/page-profile.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PageEmailReceiversComponent } from './page/page-email-receivers/page-email-receivers.component';
import { PageFirmsComponent } from './page/page-firms/page-firms.component';
import { PageDashboardComponent } from './page/page-dashboard/page-dashboard.component';
import { FirmItemComponent } from './component/firm-item/firm-item.component';
import { WebThreatsSettingsComponent } from './component/pot-item/pot-item-settings/web-threats-settings/web-threats-settings.component';
import { WebScrapingSettingsComponent } from './component/pot-item/pot-item-settings/web-scraping-settings/web-scraping-settings.component';
import { PotItemSettingsComponent } from './component/pot-item/pot-item-settings/pot-item-settings.component';
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { PageServersComponent } from './page/page-servers/page-servers.component';
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PagePotsComponent,
    FooterComponent,
    PotItemComponent,
    PageAttemptsComponent,
    SidebarComponent,
    TableHeaderComponent,
    TableItemComponent,
    HeaderComponent,
    OverlayComponent,
    DetailsModalComponent,
    EmailPotSettings,
    CategoryFilterComponent,
    DateFilterComponent,
    OriginFilterComponent,
    PageProfileComponent,
    PageNotFoundComponent,
    PageEmailReceiversComponent,
    PageFirmsComponent,
    PageDashboardComponent,
    FirmItemComponent,
    WebThreatsSettingsComponent,
    WebScrapingSettingsComponent,
    PotItemSettingsComponent,
    PageServersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    CookieModule.withOptions(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      tapToDismiss: true,
    }),
    MatPaginatorModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
