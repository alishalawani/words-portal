import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  word: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.word = this.route.snapshot.paramMap.get('word');
    console.log('the word: ' + this.word)
  }

}
