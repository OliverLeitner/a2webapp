/**
 * initializing the sub template game-over
 */
import { Component, Input, Output, Inject, forwardRef } from '@angular/core';
import { Http } from '@angular/http';
import { HangmanComponent } from '../hangman/hangman.component';

@Component({
    selector: 'game-over',
    templateUrl: './gameover.component.html',
    //main view inheritance
    providers: [{provide: HangmanComponent, useExisting: forwardRef(() => GameOverComponent) }]
})
//referencing main component parameters
export class GameOverComponent extends HangmanComponent {
    @Input() cur_try : number;
    @Input() maxReached : boolean;
    /*constructor (public http: Http) {
        super(http);
    }*/
}
