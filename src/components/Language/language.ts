export class Language {
    constructor(private lang: string) {

    }

    translate(entry: {[key: string]: string}) {
        return entry[this.lang];
    }
}