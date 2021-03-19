import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverComponent } from './discover.component';

//isolated test version

describe('DiscoverComponent', () => {
  let component: DiscoverComponent;

  beforeEach(() => {
    component = new DiscoverComponent()
  });

  it('should contain the right words in its rarelyUsedWords array', ()=>{
    component.rarelyUsedWords  = [
      'cavil',
      'churlish',
      'beldam',
      'serendipity',
      'scrumptious',
    ];
    expect(component.rarelyUsedWords).toEqual([
      'cavil',
      'churlish',
      'beldam',
      'serendipity',
      'scrumptious',
    ])
  })
  
});
