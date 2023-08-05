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
import {PageSuspiciousComponent} from './page/page-suspicious/page-suspicious.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import { TableHeaderComponent } from './component/suspicious-table/table-header/table-header.component';
import {TableItemComponent} from "./component/suspicious-table/table-item/table-item.component";
import { HeaderComponent } from './component/header/header.component';
import { OverlayComponent } from './component/overlay/overlay.component';
import { DetailsModalComponent } from './component/suspicious-table/details-modal/details-modal.component';
import {EmailPotSettings} from "./component/pot-item/pot-item-settings/email-pot-settings/email-pot-settings";
import { CategoryFilterComponent } from './component/suspicious-table/table-header/category-filter/category-filter.component';
import { DateFilterComponent } from './component/suspicious-table/table-header/date-filter/date-filter.component';
import { OriginFilterComponent } from './component/suspicious-table/table-header/origin-filter/origin-filter.component';
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
import {MatInputModule} from "@angular/material/input";
import { PageServersComponent } from './page/page-servers/page-servers.component';
import {MatSelectModule} from "@angular/material/select";
import { SuspiciousTableComponent } from './component/suspicious-table/suspicious-table.component';
import { ServersTableComponent } from './component/servers-table/servers-table.component';
import { StatusSelectComponent } from './component/servers-table/status-select/status-select.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { UnrestrictedFileUploadSettingsComponent } from './component/pot-item/pot-item-settings/unrestricted-file-upload-settings/unrestricted-file-upload-settings.component';
import {MatListModule} from "@angular/material/list";
import { SuspiciousCategoryGroupComponent } from './component/charts/suspicious-category-group/suspicious-category-group.component';
import { SuspiciousOriginGroupComponent } from './component/charts/suspicious-origin-group/suspicious-origin-group.component';
@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PagePotsComponent,
    FooterComponent,
    PotItemComponent,
    PageSuspiciousComponent,
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
    SuspiciousTableComponent,
    ServersTableComponent,
    StatusSelectComponent,
    UnrestrictedFileUploadSettingsComponent,
    SuspiciousCategoryGroupComponent,
    SuspiciousOriginGroupComponent,
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
        MatSelectModule,
        MatListModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
