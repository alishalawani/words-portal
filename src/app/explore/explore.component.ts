import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  word: string;
  
  private _searchValue: string = 'trending';
  get searchValue(): string{
    return this._searchValue;
  }
  set searchValue(value: string){
    this._searchValue = value;
  }
  
  constructor(){}

  onSearch():void{
    this.word = this.searchValue;
  }

  ngOnInit(): void {
    this.word = this.searchValue;
  }

}
