import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TextBlockComponent } from './text-block/text-block.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ScheduleComponent,
    PresentationComponent,
    TextBlockComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
