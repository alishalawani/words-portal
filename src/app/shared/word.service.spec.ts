import { TestBed } from '@angular/core/testing';

import { WordService } from './word.service';

describe('WordsService', () => {
  let service: WordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordService);
  });

  
});
