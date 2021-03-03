import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  event:any

  constructor() { }

  ngOnInit(): void {
    this.event = {
      eventName: 'Special',
      eventLocation: 'Paris'
    }
  }

  saveEvemt(eventFormValue){
    alert(`${eventFormValue.eventName} Event at Location: ${eventFormValue.eventLocation}`)
  }

}
