import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

//reading config
import { AppConfig } from '../config/app.config';
import { IAppConfig } from '../config/config.model';

//import base functionality
import { GlobalFunctions } from '../libs/functions';

//for data binding...
import { HangMan } from '../models/form.model';
import { HangManOut } from '../models/word.model';

@Component({
    selector: 'app-hangman',
    templateUrl: './hangman.component.html',
    styleUrls: ['../styles/style.less'],
    encapsulation: ViewEncapsulation.None
})
export class HangmanComponent {
    //getting the configuration
    functions : GlobalFunctions = new GlobalFunctions();
    config : IAppConfig = AppConfig.settings;

    //string global vars
    input_word : string = '';
    cur_word : string = '';
    time_spent : string = '';

    //show divs or not
    isValid : boolean = false;
    isFailed : boolean = false;
    maxReached : boolean = false;
    showit : boolean = false;

    //input form object
    model : HangMan = new HangMan('');

    //output data object
    output : HangManOut = new HangManOut('', '', '', 0, 0);

    //predefine the others...
    getData : any[] = [];
    cur_try : number = 0;
    start_time : Date = new Date();

    /**
     * shows or hides elements
     */
    showStuff = ((
        isValid : boolean = false,
        isFailed : boolean = false,
        maxReached : boolean = false
    ) : void => {
        this.isValid = isValid;
        this.isFailed = isFailed;
        this.maxReached = maxReached;
    });

    /**
     * show or hide the word
     */
    showWord = (() : void => {
        this.showit ? this.showit = false : this.showit = true;
    });

    /**
     * grabbing the data
     */
    getWord = (() : void => {
        //lets set the count in the fe
        let myheaders = new Headers();
        myheaders.append('Content-Type', 'text/plain;charset=UTF-8');
        myheaders.append('Accept', 'text/plain,text/html,application/xhtml+xml,application/xml,application/json;q=0.9,*/*;q=0.8');
        let options = new RequestOptions({ headers: myheaders, method: 'GET' });
        //grabbing the words array from a json data interface
        this.http.get(AppConfig.settings.url, options)
            .subscribe(
                (data) => {
                    this.getData = data.json();
                    this.cur_word = this.functions.randomWord(this.getData);
                    let hint = this.getData[this.cur_word];
                    let word_out = this.functions.getFiller(this.cur_word, AppConfig.settings.fill_char);
                    this.output = new HangManOut(this.cur_word.toLowerCase(), hint, word_out, this.cur_try, AppConfig.settings.max_tries);
                }
            );
    });

    /**
     * submitting the form
     */
    onSubmit = ((word: any) : void => {
        //FIXME: this i bet can be done better...
        this.input_word = word.originalTarget[1].value;
        //number of possible tries...
        if (this.cur_try < AppConfig.settings.max_tries) {
            //checking input against active case insensitive, cause it doesnt matter...
            if (this.input_word.toLowerCase() === this.cur_word.toLowerCase()) {
                //success
                this.time_spent = this.functions.timeSpent(this.start_time);
                this.showStuff(true, false, false);
            } else {
                //failure
                this.showStuff(false, true);
                //count one up
                this.cur_try++;
            }
        } else {
            //player looses
            this.showStuff(false, false, true);
        }
    });

    /**
     * puttin it all together...
     */
    constructor(public http : Http) {
        this.getWord();
    }
}
