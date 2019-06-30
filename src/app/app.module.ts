import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsComponent,
    EventsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // for services
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
