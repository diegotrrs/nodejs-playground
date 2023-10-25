const MORSE_CODE: { [key: string]: string } = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};
const testString = ".... . -.--   .--- ..- -.. ."

export function decodeMorse(morseCode: string): string {
  // your code here
  const codedWords = morseCode.trim().split("   ")
  const words = codedWords.map((codedWord) => {
    const codes = codedWord.split(" ")
    const word = codes.reduce((accum, code) => {
      const character = MORSE_CODE[code]
      accum += character
      return accum
    }, "")
//     const word = codes.map((code) => {
//       return MORSE_CODE[code]
//     }).join("")
    
    return word    
  })
 
  return  words.join(" ")
}

console.log(decodeMorse(testString))