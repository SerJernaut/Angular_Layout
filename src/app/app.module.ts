import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoComponent } from './video/video.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ScheduleComponent,
    PresentationComponent,
    TextBlockComponent,
    ContactsComponent,
    FooterComponent,
    MainPageComponent,
    VideoComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
