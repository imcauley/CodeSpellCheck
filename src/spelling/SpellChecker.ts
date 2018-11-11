class SpellChecker {
    public static main(): number {
        return 0;
    }

    one_edit(word: string) {
        let letters = 'abcdefghijklmnopqrstuvwxyz'
        let splits = []

        let deletes = []
        for(var i = 0; i < (word.length + 1); i++) {
            let new_split = [
                word.slice(0,i),
                word.slice(i,word.length)
            ]
            splits.push(new_split)
        }

        //[ 'tring', 'sring', 'sting', 'strng', 'strig', 'strin' ]
        for(var i = 0; i < splits.length; i++) {
            let split = splits[i]
            if (split[1] != ''){
                let new_delete = split[0] + split[1].slice(1,)
                deletes.push(new_delete)
            }
        }
    }
}

let s = new SpellChecker()
console.log(s.one_edit("string"))