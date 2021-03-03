import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event

  constructor() { }

  ngOnInit(): void {
  }

  saveEvemt(eventFormValue){
    alert(`${eventFormValue.eventName} Event at Location: ${eventFormValue.eventLocation}`)
  }

}
