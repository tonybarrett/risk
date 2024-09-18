import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DetailComponent } from './detail/detail.component';
import { OfficersComponent } from './officers/officers.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { BusyComponent } from './busy/busy.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    OfficersComponent,
    DetailComponent,
    SearchComponent,
    ResultsComponent,
    BusyComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
