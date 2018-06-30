import { Component, Input, Output, Inject, forwardRef } from '@angular/core';
import { Http } from '@angular/http';
import { HangmanComponent } from '../hangman/hangman.component';

@Component({
    selector: 'failed',
    templateUrl: './failed.component.html',
    providers: [{provide: HangmanComponent, useExisting: forwardRef(() => FailedComponent) }]
})
export class FailedComponent extends HangmanComponent {
    @Input() cur_try : number;
    @Input() isFailed : boolean;
    /*constructor (public http: Http) {
        super(http);
    }*/
}
