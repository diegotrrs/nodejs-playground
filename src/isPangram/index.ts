

enum ASCII_CODES  { 
  a= 97,
  z= 122,  
}

//export const isPangram = (phrase: string): boolean => new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;

export const isPangramSimplified = (phrase: string) => {
  const set = new Set(phrase.toLowerCase().match(/[a-z]/g))
  return set.size === 26
}

export const isPangram = (phrase: string): boolean => {
  const lowercasePhrase = phrase.toLowerCase()


  const s = "Hey hola"

  
  console.log("🚀 ~ isPangram ~ s.match(/[a-z]/):", s.match(/[a-z]/g))

  
  //console.log("🚀 ~ isPangram ~ lowercasePhrase.toLowerCase().match(/[a-z]/g):", lowercasePhrase.toLowerCase().match(/[a-z]/g))

  const asciCodesInWords: Record<number, boolean> = {}

  for(let i=ASCII_CODES.a; i<= ASCII_CODES.z; i++){
    asciCodesInWords[i] = false
  }

  for(let i=0; i< lowercasePhrase.length; i++){
    const asciiCode = lowercasePhrase.charCodeAt(i)
    if(asciiCode in asciCodesInWords){      
      asciCodesInWords[asciiCode]= true
    }    
  }



  for(let asciiCode in asciCodesInWords){
      if(!asciCodesInWords[asciiCode]){
        return false
      }
  }
  return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))


const x = "Ha".match(/[a-z]/g)
console.log("🚀 ~ x:", x)

