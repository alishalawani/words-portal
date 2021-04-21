import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DiscoverComponent } from "./discover.component";

describe('DiscoverComponent', ()=>{
    let fixture: ComponentFixture<DiscoverComponent>;
    @Component({
        selector:'wp-word-info',
        template:'<div></div>'
    })
    class FakeWordInfoComponent{
        @Input() definition: string;
        @Input() synonyms: string;
        @Input() partOfSpeech: string;
        @Input() extraResult: any;
        @Input() seeGifs: void;

    }
    @Component({
        selector:'wp-word-detail',
        template: `<div class='word-detail'><wp-word-info></wp-word-info></div>`
    })
    class FakeWordDetailComponent{
        @Input() word: string;
    }

    beforeAll(()=>{

        TestBed.configureTestingModule({
            declarations: [DiscoverComponent, FakeWordDetailComponent, FakeWordInfoComponent],
            schemas:[NO_ERRORS_SCHEMA]
        })
        
        fixture = TestBed.createComponent(DiscoverComponent);
    })
    
    it('should contain the right sentence in the page header',()=>{
        fixture.detectChanges();
        let sentence = 'Discover some words you probably haven\'t heard of!';
        let h2 = fixture.debugElement.query(By.css('h2')).nativeElement;

        expect(h2.innerText).toContain(sentence);
    })

    xit('should create one div with a class name of word-detail for each word', ()=>{
        fixture.detectChanges()
        // expect(fixture.debugElement.queryAll(By.directive(FakeWordDetailComponent)).length).toEqual(5)
        expect(fixture.debugElement.queryAll(By.css('.word-detail')).length).toEqual(1)
    })
})