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
import {MatPaginatorModule} from '@angular/material/paginator';
import { PageEmailReceiversComponent } from './page/page-email-receivers/page-email-receivers.component';
import { PageFirmsComponent } from './page/page-firms/page-firms.component';
import { PageDashboardComponent } from './page/page-dashboard/page-dashboard.component';
import { FirmItemComponent } from './component/firm-item/firm-item.component';
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
import {MatListModule} from "@angular/material/list";
import { SuspiciousCategoryComponent } from './component/charts/suspicious-category/suspicious-category.component';
import { SuspiciousOriginSourceComponent } from './component/charts/suspicious-origin-source/suspicious-origin-source.component';
import { SuspiciousOriginCountryComponent } from './component/charts/suspicious-origin-country/suspicious-origin-country.component';
import { LastTrappedSourcesComponent } from './component/charts/last-trapped-sources/last-trapped-sources.component';
import { ServerStatusComponent } from './component/charts/server-status/server-status.component';
import { WorldChartComponent } from './component/charts/world-chart/world-chart.component';
import { ReceiversTableComponent } from './component/receivers-table/receivers-table.component';
import { ReceiverHeaderComponent } from './component/receivers-table/receiver-header/receiver-header.component';
import { ReceiversTableItemComponent } from './component/receivers-table/receivers-table-item/receivers-table-item.component';
import { ReceivedMailComponent } from './component/receivers-table/received-mail/received-mail.component';
import { FilterDateComponent } from './component/receivers-table/receiver-header/filter-date/filter-date.component';
import { ReceiverFilterComponent } from './component/receivers-table/receiver-header/receiver-filter/receiver-filter.component';
import { ProfileHeaderComponent } from './component/profile/profile-header/profile-header.component';
import { ProfileFieldsComponent } from './component/profile/profile-fields/profile-fields.component';
import { DefaultSettingsComponent } from './component/pot-item/pot-item-settings/default-settings/default-settings.component';
import { WebCloneSettingsComponent } from './component/pot-item/pot-item-settings/web-clone-settings/web-clone-settings.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SshSettingsComponent } from './component/pot-item/pot-item-settings/ssh-settings/ssh-settings.component';
import { PageReportsComponent } from './page/page-reports/page-reports.component';
import { ReportItemComponent } from './component/report-item/report-item.component';
import { ModalGenerateReportComponent } from './component/report-item/modal-generate-report/modal-generate-report.component';
import { ReportSearch } from './component/report-search/report-search';
import {MatChipsModule} from "@angular/material/chips";
import { ReportActionsComponent } from './component/report-item/report-actions/report-actions.component';

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
    PageEmailReceiversComponent,
    PageFirmsComponent,
    PageDashboardComponent,
    FirmItemComponent,
    PotItemSettingsComponent,
    PageServersComponent,
    SuspiciousTableComponent,
    ServersTableComponent,
    StatusSelectComponent,
    SuspiciousCategoryComponent,
    SuspiciousOriginSourceComponent,
    SuspiciousOriginCountryComponent,
    LastTrappedSourcesComponent,
    ServerStatusComponent,
    WorldChartComponent,
    ReceiversTableComponent,
    ReceiverHeaderComponent,
    ReceiversTableItemComponent,
    ReceivedMailComponent,
    FilterDateComponent,
    ReceiverFilterComponent,
    ProfileHeaderComponent,
    ProfileFieldsComponent,
    DefaultSettingsComponent,
    WebCloneSettingsComponent,
    SshSettingsComponent,
    PageReportsComponent,
    ReportItemComponent,
    ModalGenerateReportComponent,
    ReportSearch,
    ReportActionsComponent,
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
    MatProgressSpinnerModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
