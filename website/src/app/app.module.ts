import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';
import { ArtComponent } from './art/art.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    ResumeComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
