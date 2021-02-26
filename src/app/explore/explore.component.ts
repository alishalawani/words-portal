import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordService } from '../shared/word.service';


@Component({
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  word: string;
  errorMessage: string;
  definition: string;
  synonyms: string[];
  results: any;
  partOfSpeech?: string;
  extraResult?: any;


  
  private _searchValue: string = 'portal';
  get searchValue(): string{
    return this._searchValue;
  }
  set searchValue(value: string){
    this._searchValue = value;
  }
  
  constructor(private router: Router, private wordSerivice: WordService) { }
  
  seeGifs = (word: string):void => {
    this.router.navigate([`/gifs/${word}`])
  }
  

  onSearch():void{
    this.word = this.searchValue;
    this.getWordInfo();
  }
  getWordInfo():void{
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
  ngOnInit(): void {
    this.getWordInfo();
    this.word = this.searchValue;
  }

}





