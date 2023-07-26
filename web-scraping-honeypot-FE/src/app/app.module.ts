import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HeroComponent } from './component/hero/hero.component';
import { OffersComponent } from './component/offers/offers.component';
import { FeaturesComponent } from './component/features/features.component';
import { DevicesComponent } from './component/devices/devices.component';
import { FaqComponent } from './component/faq/faq.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import { OfferCardComponent } from './component/offers/offer-card/offer-card.component';
import {HttpClientModule} from "@angular/common/http";
import { FeatureCardComponent } from './component/features/feature-card/feature-card.component';
import { DeviceItemComponent } from './component/devices/device-item/device-item.component';
import { FaqCardComponent } from './component/faq/faq-card/faq-card.component';
import { TestimonialCardComponent } from './component/testimonials/testimonial-card/testimonial-card.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    OffersComponent,
    FeaturesComponent,
    DevicesComponent,
    FaqComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    OfferCardComponent,
    FeatureCardComponent,
    DeviceItemComponent,
    FaqCardComponent,
    TestimonialCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
