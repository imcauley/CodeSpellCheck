import * as word_file from './word_list.json'

class SpellChecker {
    word_list: string[]

    public static main(): number {
        return 0;
    }

    constructor() {
        this.word_list = (word_file as unknown) as string[]
    }

    known(words: Array<string>) {

    }

    one_edit(word: string) {
        let letters = 'abcdefghijklmnopqrstuvwxyz'
        let splits = []
        let changes = []
        
        let deletes = []
        let transposes = []
        let replaces = []
        let inserts = []

        for(var i = 0; i < (word.length + 1); i++) {
            let new_split = [
                word.slice(0,i),
                word.slice(i,)
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
        //[ 'tsring', 'srting', 'stirng', 'strnig', 'strign' ]
        for(var i = 0; i < splits.length; i++) {
            let split = splits[i]
            if (split[1].length > 1){
                let new_delete = split[0] + split[1][1] + split[1][0] + split[1].slice(2,)
                transposes.push(new_delete)
            }
        }
        //[ 'atring', 'btring', 'ctring', ...]
        for(var i = 0; i < splits.length; i++) {
            let split = splits[i]
            if (split[1] != ''){
                for(var j = 0; j < letters.length; j++){
                    let c = letters[j]
                    let new_replace = split[0] + c + split[1].slice(1,)
                    replaces.push(new_replace)
                }
            }
        }
        //[ 'astring', 'bstring', 'cstring', ...]
        for(var i = 0; i < splits.length; i++) {
            let split = splits[i]
            for(var j = 0; j < letters.length; j++){
                let c = letters[j]
                let new_replace = split[0] + c + split[1]
                inserts.push(new_replace)
            }
        }



        let all_changes = deletes.concat(transposes)
        all_changes = all_changes.concat(replaces)
        all_changes = all_changes.concat(inserts)


        for(var i = 0; i < all_changes.length; i++) {
            if(changes.indexOf(all_changes[i]) == -1) {
                changes.push(all_changes[i])
            }
        }
        return changes

    }
}

let s = new SpellChecker()
console.log(s.one_edit("string"))