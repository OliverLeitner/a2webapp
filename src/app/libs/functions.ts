/**
 * holding our function collection
 */
export class GlobalFunctions {
    /**
     * returns a random word from a json
     * object array
     */
    public randomWord = ((words : String[]) : string => {
        return Object.keys(words)[0];
    });

    /**
     * returns the first char then fillers and then the
     * last char of a word
     */
    public getFiller = ((word : string = '', fill_char : string = '') : string => {
        let w_arr = Array.from(word.toLowerCase());
        let length = word.length - 1;
        let word_out = '';
        let tag = fill_char;
        Object.values(w_arr).forEach(function (val, key) {
            if (key === 0 || key === length) {
                word_out += val;
            } else {
                word_out += tag;
            }
        });
        return word_out;
    });

    /**
     * starting a new game
     */
    public resetGame = (() : void => {
        //this is the best solution
        //to reload???
        window.location.reload();
    });

    /**
     * time spent playing
     * returns string of seconds since game started.
     */
    public timeSpent = ((start_time : Date) : string => {
        let endDate = new Date();
        //game time in minutes
        let seconds = (endDate.getTime() - start_time.getTime()) / 1000;
        return seconds.toFixed(2);
    });
}
