/**
 * component to initialize the sub template for failed div
 */
import { Component, Input, Output, Inject, forwardRef } from '@angular/core';
import { Http } from '@angular/http';
import { HangmanComponent } from '../hangman/hangman.component';

@Component({
    selector: 'failed',
    templateUrl: './failed.component.html',
    //inheriting templateable data from hangman.component
    providers: [{provide: HangmanComponent, useExisting: forwardRef(() => FailedComponent) }]
})
//needed parameter referencing
export class FailedComponent extends HangmanComponent {
    @Input() cur_try : number;
    @Input() isFailed : boolean;
    /*constructor (public http: Http) {
        super(http);
    }*/
}
