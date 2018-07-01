/**
 * these are the field
 * definitions for templating
 * so we stay typesafe
 */
export class HangManOut {
    constructor (
        public word: string,
        public hint: string,
        public filler: string,
        public count: number,
        public max_count: number
    ) { }
}
