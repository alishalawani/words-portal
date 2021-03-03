import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewEventComponent } from './new-event.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([  {path: 'event', component: NewEventComponent},])
  ]
})
export class EventModule { }
