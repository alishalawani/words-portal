import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { WordDetailComponent } from './shared/word-detail.component';
import { DiscoverComponent } from './discover/discover.component';
import { GifsComponent } from './discover/gifs.component';
import { WordInfoComponent } from './shared/word-info.component';
import { ProfileComponent } from './welcome/profile.component';
import { EventComponent } from './welcome/event.component';


@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    WordDetailComponent,
    DiscoverComponent,
    GifsComponent,
    WordInfoComponent,
    ProfileComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
