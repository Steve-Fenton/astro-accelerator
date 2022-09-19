export class Language {
    constructor(private lang: string) {

    }

    translate(entry: Entry) {
        return entry[this.lang];
    }
}

export function Lang(lang: string) {
    return (entry: Entry) => entry[lang];
}

export type Entry = {[key: string]: string};