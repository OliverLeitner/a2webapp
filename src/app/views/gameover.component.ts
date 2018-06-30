import { Component, Input, Output, Inject, forwardRef } from '@angular/core';
import { Http } from '@angular/http';
import { HangmanComponent } from '../hangman/hangman.component';

@Component({
    selector: 'game-over',
    templateUrl: './gameover.component.html',
    providers: [{provide: HangmanComponent, useExisting: forwardRef(() => GameOverComponent) }]
})
export class GameOverComponent extends HangmanComponent {
    @Input() cur_try : number;
    @Input() maxReached : boolean;
    /*constructor (public http: Http) {
        super(http);
    }*/
}
