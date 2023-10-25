
// https://leetcode.com/problems/text-justification/

function fullJustify(words: string[], maxWidth: number): string[] {
    const res: string [] = []
    let currentString = ""
    const wordsCount = words.length
    let i = 0
    while(i < wordsCount){
        const word = words[i]
        console.log(`****** word: ${word} | currentString: ${currentString}`)
        const temp = currentString + word
        if (temp.length === maxWidth) {
            console.log(`case 1 word: ${word} | currentString: ${currentString}`)
            res.push(temp)
            currentString = ""
            i++
        } else if (temp.length > maxWidth) {
            console.log(`case 2 word: ${word} | currentString: ${currentString} (${currentString.length})`)
            const newString = xxx(currentString, maxWidth)

            res.push(newString)
            currentString = ""
        } else {           
            currentString += word + " "
            console.log(`case 3 word: ${word} | currentString: ${currentString}.`)
            i++
        }        
    }

    if(currentString.length > 0){
        const newString = xxx(currentString, maxWidth)

        res.push(currentString)
    }
    return res
};

//const words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16\
const words = ["What","must","be","acknowledgment","shall","be"]
const maxWidth = 16
//const words = ["This", "is", "an", "example", "of"], maxWidth = 16


console.log(fullJustify(words, maxWidth))

function xxx(currentString: string, maxWidth: number) {
    currentString = currentString.trim()
    //currentString += " ".repeat(numberOfSpaces)
    const tokens = currentString.split(" ")
    const currentLineLength = tokens.join("").length
    const numberOfSpaces = maxWidth - currentLineLength

    const numberOfWords = tokens.length
    const spacesPerWord = numberOfWords > 1 ? numberOfSpaces / (numberOfWords - 1) : numberOfSpaces
    let spacesRemaining = numberOfSpaces

    console.log(`currentString ${currentString}. currentString.length ${currentString.length} currentLineLength ${currentLineLength} numberOfSpaces ${numberOfSpaces} maxWidth ${maxWidth} numberOfSpaces ${numberOfSpaces} numberOfWords ${numberOfWords} spacesPerWord ${spacesPerWord}`)
    //console.log(currentString.length, maxWidth, numberOfSpaces, numberOfWords, spacesPerWord)
    let newString = ""
    for (const token of tokens) {
        if (spacesRemaining > 0) {
            newString += token + " ".repeat(spacesPerWord)
            spacesRemaining -= spacesPerWord
        } else {
            newString += token
        }
    }

    console.log('spaces remaining', spacesRemaining)

    return newString
}
 
    