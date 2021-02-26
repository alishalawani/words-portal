import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { WordDetailComponent } from './shared/word-detail.component';
import { DiscoverComponent } from './discover/discover.component';
import { GifsComponent } from './discover/gifs.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    WordDetailComponent,
    DiscoverComponent,
    GifsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
