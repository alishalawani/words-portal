import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { GifsComponent } from './discover/gifs.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
  { path: 'explore', component: ExploreComponent },
  { path: 'discover', component: DiscoverComponent },
  {path: 'gifs/:word', component: GifsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
