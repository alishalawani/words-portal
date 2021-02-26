import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GifsService } from './gifs.service';

@Component({
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  word: string;
  errorMessage: string;
  gifs: any[];
  private _searchValue: string;

  get searchValue(): string {
    return this._searchValue;
  }
  set searchValue(value: string){
    this._searchValue = value;
  }


  constructor(private route: ActivatedRoute, private router: Router, private gifsService: GifsService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

   onSearch():void{
     this.router.navigate([`/gifs/${this.searchValue}`])
   }

  ngOnInit(): void {
    this.word = this.route.snapshot.paramMap.get('word');
    this.searchValue = this.word;
    this.gifsService.getGifs(this.word).subscribe({
      next: result => {
        this.gifs = result.data;
      },
      error: error => this.errorMessage = error
    })
  }

}
