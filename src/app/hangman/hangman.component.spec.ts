import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanComponent } from './hangman.component';

describe('HangmanComponent', () => {
    let component: HangmanComponent;
    let fixture: ComponentFixture<HangmanComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HangmanComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HangmanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    /*it('getWords() while server is down', fakeAsync(() => {
        let result: any;
        let catchedError: any;
        this.userUser.getWords()
            .then((userInfo: any) => result = userInfo)
            .catch((error: any) => catchedError = error);
        this.lastConnection.mockRespond(new Response(new ResponseOptions({
            status: 404, //here
            statusText: 'URL not Found',
        })));
        tick();
        expect(result).toBeUndefined();
        expect(catchedError).toBeDefined();
    }));*/
});
