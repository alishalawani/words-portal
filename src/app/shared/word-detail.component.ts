import { Component, Input, OnInit } from '@angular/core';
import { WordService } from './word.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wp-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  @Input() word: string;
  errorMessage: string;
  definition: string;
  synonyms: string[];
  results: any;
  partOfSpeech?: string;
  extraResult?: any;
  

  constructor(private wordSerivice: WordService, private router: Router) { }

  seeGifs = (word: string):void => {
    this.router.navigate([`/gifs/${word}`])
  }


  ngOnInit(): void {
    this.wordSerivice.getWord(this.word).subscribe({
      next: word => { 
        this.results = word.results[0];
        this.definition = this.results.definition
        this.synonyms = this.results.synonyms;
        this.partOfSpeech = this.results.partOfSpeech;
        this.extraResult = word.results[1];
       },
      error: err => this.errorMessage = err
    })
  }

}
