import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { GifsComponent } from './discover/gifs.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './welcome/profile.component';

const routes: Routes = [
  { path: 'explore', component: ExploreComponent },
  { path: 'discover', component: DiscoverComponent },
  {path: 'gifs/:word', component: GifsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo:'discover', pathMatch: 'full'},
  {path: '**', redirectTo: 'discover', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
