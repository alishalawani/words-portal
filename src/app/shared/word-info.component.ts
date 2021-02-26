import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wp-word-info',
  templateUrl: './word-info.component.html',
  styleUrls: ['./word-info.component.css']
})
export class WordInfoComponent implements OnInit {
  @Input() word: string;
  @Input() definition: string;
  @Input() synonyms: string[];
  @Input() partOfSpeech?: string;
  @Input() extraResult?: any;
  @Input() seeGifs: any;

  constructor() { }

  ngOnInit(): void {
  }

}
