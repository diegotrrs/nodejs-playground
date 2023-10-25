function reverseWords1(s: string): string {
  const words = s.trim().split(/\s+/)
  return words.reverse().join(" ")
};

/*

/  \s  +/

*/

function reverseWords(s: string): string {
  const stack: string [] = []
  const words = s.trim().split(/\s+/)
  console.log('... words ...')
  console.log(words)
  for(const word of words){
    stack.push(word)
  }
  let f = ""
  while(stack.length > 0){
    const element = stack.pop()
    console.log('stack.pop()', element)
    f += element  + " "
  }
  return f.trim()
 };
 

 function reverseWordsX(s: string): string {
  const stack: string [] = []
  const words = s.trim().split(/\s+/)
  console.log('... words ...')
  console.log(words)
  for(const word of words){
    stack.push(word)
  }
  let f = ""
  while(stack.length > 0){
    const element = stack.pop()
    console.log('stack.pop()', element)
    f += element  + " "
  }
  return f.trim()
 };


 // "The sky is blue"
 // index = 0

 function reverseWordsA(s: string): string {
  const stack: string [] = []
  const characters = [...s]
  const words = []
  let index = -1

  for(let i = 0; i <= characters.length - 1; i++){
    //console.log(`>> character `, characters[i])
    if(characters[i] === " "){
      if(index !== -1){
        words.push(s.substring(index, i))
        index = -1
      }      
    } else {
      if(index === -1){
        index = i
      }            
    }
  }

  if(characters[characters.length - 1] !== "" && index !== -1){
    console.log('index', index)
    words.push(s.substring(index, characters.length))
  }

  // let f = ""
  // while(stack.length > 0){
  //   const element = stack.pop()
  //   console.log('stack.pop()', element)
  //   f += element  + " "
  // }
  //return f.trim()
  return words.join(" ")
 };

 function removeExtraSpacesWithoutReplace(input: string): string {
  let result = '';
  let previousCharWasSpace = false;

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];

    if (currentChar !== ' ') {
      // If the current character is not a space, append it to the result.
      result += currentChar;
      previousCharWasSpace = false;
    } else {
      // If the current character is a space and the previous character was not a space,
      // append a single space to the result.
      if (!previousCharWasSpace) {
        result += ' ';
      }
      previousCharWasSpace = true;
    }
  }

  return result;
}

// "  The sky is blue  "



function removeExtraSpacesToArray(input: string){
  let inWord = false
  let currentWord = ""
  const words = []
  for (let i = 0; i <= input.length - 1; i++) {
    const currentChar = input[i];

    if(currentChar !== ' '){
      currentWord += currentChar
      inWord = true
    } else if(inWord){
      words.push(currentWord)
      inWord = false
      currentWord = ""
    }    
  }

  if (inWord) {
    words.push(currentWord);
  }
  return words
}


function reverseWordsWithoutAnyUtilFunction(s: string): string {

  
  
  const words = removeExtraSpacesToArray(s)
  console.log('... words ...')
  console.log(words)

  let f = ""
  while(words.length > 0){
    const element = words.pop()
    console.log('stack.pop()', element)
    f += element  + " "
  }
  return f.trim()
 };


 console.log(removeExtraSpacesToArray("the sky is blue"))
//const reversed = reverseWordsWithoutAnyUtilFunction("the sky is blue")
//console.log(`reversed: "${reversed}"`)

//console.log(`without spaces: "${removeExtraSpacesToArray("  The sky is blue   ")}"`)



const char = ""
const inWord = true


