

function option6(str: string): string {
  if(str == "") return str
  console.log( `str[str.length - 1]  ${str[str.length - 1]} ---->>> str.substring(0, str.length - 1)  ${str.substring(0, str.length - 1)}`)  
  return str[str.length - 1] + option6(str.substring(0, str.length - 1))
}

function option5(str: string): string {    
  return [...str].reverse().join("")
}

function option4(str: string): string {
  let reversed = ""
  for(let char of str){
    reversed = char + reversed
  }
  return reversed
}

const option3 = (sentence: string) => {
  const stack = []
  
  for (const char of sentence) {
    stack.push(char);
  }

  let reversed = ""
  while (stack.length > 0) {
    const element = stack.pop()
    //console.log('element', element, stack.length)
    if(element){

      reversed = reversed.concat(element)
    }
  }

  return reversed;
}

const option2 = (sentence: string) => {
  return sentence.split("").reverse().join("")
}

const option1 = (sentence: string) => {
  const stack = []
  
  for (let index = 0; index < sentence.length; index++) {
    const element = sentence[index];
    stack.push(element);
  }

  let reversed = ""
  while (stack.length > 0) {
    const element = stack.pop()
    //console.log('element', element, stack.length)
    if(element){

      reversed = reversed.concat(element)
    }
  }

  return reversed;
}

export default () => {
  
  console.log(option1("Hey how are you?"))
  //console.log(option2("Hey how are you?"))
  //console.log(option3("Hey how are you?"))
  //console.log(option4("Hey how are you?"))
  //console.log(option5("Hey how are you?"))
  //console.log(option6("Hey how are you?"))
}