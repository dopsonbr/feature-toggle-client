import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeatureToggleComponent } from './feature-toggle/feature-toggle.component';
import {FeatureToggleService} from './feature-toggle/feature-toggle-service';


@NgModule({
  declarations: [
    AppComponent,
    FeatureToggleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [FeatureToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
