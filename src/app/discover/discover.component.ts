import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  rarelyUsedWords: string[];
  

  constructor() { }

  ngOnInit(): void {
    this.rarelyUsedWords = [
      'cavil',
      'churlish',
      'beldam',
      'serendipity',
      'scrumptious',
    ]
  }

}
