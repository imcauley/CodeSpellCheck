class SpellChecker {
    public static main(): number {
        return 0;
    }

    one_edit(word: string) {
        let letters = 'abcdefghijklmnopqrstuvwxyz'
        let splits = []

        for(var i = 0; i < (word.length + 1); i++) {
            let new_split = [
                word.slice(0,i),
                word.slice(i,word.length)
            ]
            splits.push(new_split)
        }

        return splits
    }
}

let s = new SpellChecker()
console.log(s.one_edit("string"))