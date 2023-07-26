import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PageLoginComponent} from "./page/page-login/page-login.component";
import {PagePotsComponent} from './page/page-pots/page-pots.component';
import {FooterComponent} from './component/footer/footer.component';
import {PotItemComponent} from './component/pot-item/pot-item.component';
import {NgOptimizedImage} from "@angular/common";
import {CookieModule} from 'ngx-cookie';
import {PageAttemptsComponent} from './page/page-attempts/page-attempts.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import { AttemptsTableComponent } from './component/attempts-table/attempts-table.component';
import { TableHeaderComponent } from './component/attempts-table/table-header/table-header.component';
import {TableItemComponent} from "./component/attempts-table/table-item/table-item.component";
import { HeaderComponent } from './component/header/header.component';
import { OverlayComponent } from './component/overlay/overlay.component';
import { DetailsModalComponent } from './component/attempts-table/details-modal/details-modal.component';
import {EmailPotSettings} from "./component/pot-item/email-pot/email-pot-settings/email-pot-settings";
import { EmailPotComponent } from './component/pot-item/email-pot/email-pot.component';
import { WebThreatsPotComponent } from './component/pot-item/web-threats-pot/web-threats-pot.component';
import { WebCrawlPotComponent } from './component/pot-item/web-crawl-pot/web-crawl-pot.component';
import { CategoryFilterComponent } from './component/attempts-table/table-header/category-filter/category-filter.component';
import { DateFilterComponent } from './component/attempts-table/table-header/date-filter/date-filter.component';
import { OriginFilterComponent } from './component/attempts-table/table-header/origin-filter/origin-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PageProfileComponent } from './page/page-profile/page-profile.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PageEmailReceiversComponent } from './page/page-email-receivers/page-email-receivers.component';
import { PageFirmsComponent } from './page/page-firms/page-firms.component';
import { PageDashboardComponent } from './page/page-dashboard/page-dashboard.component';
import { FirmItemComponent } from './component/firm-item/firm-item.component';
import { WebThreatsSettingsComponent } from './component/pot-item/web-threats-pot/web-threats-settings/web-threats-settings.component';
@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PagePotsComponent,
    FooterComponent,
    PotItemComponent,
    PageAttemptsComponent,
    SidebarComponent,
    AttemptsTableComponent,
    TableHeaderComponent,
    TableItemComponent,
    HeaderComponent,
    OverlayComponent,
    DetailsModalComponent,
    EmailPotSettings,
    EmailPotComponent,
    WebThreatsPotComponent,
    WebCrawlPotComponent,
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
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
