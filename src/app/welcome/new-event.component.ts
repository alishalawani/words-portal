import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  event

  constructor() { }

  ngOnInit(): void {
  }

  saveEvemt(eventFormValue){
    alert(`${eventFormValue.eventName} Event at Location: ${eventFormValue.eventLocation}`)
  }

}
