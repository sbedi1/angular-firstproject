import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeatureSliderComponent } from './feature-slider/feature-slider.component';
import { AppRoutingModule } from './routing.module';
import { TelevisionComponent } from './views/television/television.component';

@NgModule({
  imports: [ AppRoutingModule, BrowserModule, FormsModule, AngularFontAwesomeModule],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, FeatureSliderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
