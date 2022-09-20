export function Lang(lang: string) {
    return (entry: Entry) => entry[lang];
}

export type Entry = {[key: string]: string};