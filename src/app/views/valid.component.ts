/**
 * initializing valid sub template
 */
import { Component, Input, forwardRef } from '@angular/core';
import { Http } from '@angular/http';
import { HangmanComponent } from '../hangman/hangman.component';

@Component({
    selector: 'valid-out',
    templateUrl: './valid.component.html',
    //main view inheritance
    providers: [{provide: HangmanComponent, useExisting: forwardRef(() => ValidComponent) }]
})
//referencing parameters from main view
export class ValidComponent extends HangmanComponent {
    @Input() time_spent : string;
    @Input() isValid : boolean;
    /*constructor (public http: Http) {
        super(http);
    }*/
}
