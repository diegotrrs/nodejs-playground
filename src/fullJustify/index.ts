
/*

Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

*/


/*

Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.

*/

/*

Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]

*/


const fullJustify = (words: string[], maxWidth: number) => {
  let stack: string[] = []
  const finalArray: string [] = []

  words.forEach((word, i) => {
    const characters = [ ...word ]
    stack.push(...characters)
        
    stack.push(" ")
    if(i + 1 < words.length) {
      const nextWord = words[i+1]

      if (stack.length + nextWord.length > maxWidth) {
        //console.log('> stack', stack)
        // remove white space.
        stack.pop()
        finalArray.push(stack.join(""))
        stack = []
      }
    } else {
      stack.pop()
      finalArray.push(stack.join(""))
      stack = []
    }    
  });
  return finalArray
};

function fullJustifyNew(words: string[], maxWidth: number): string[] {
  let res = [], str = "", i = 0
  let numberOfWords = words.length, x = 0;
  while( i < numberOfWords ){    
      if( (str + words[i]).length === maxWidth ){
          str += words[i++];
          res.push(str);
          str = "";
          x = i;
      }
      else if( (str + words[i]).length > maxWidth ){
          let j = x, cnt = maxWidth - (str.length - 1);
          while( cnt > 0 && j < i - 1 ){
              words[j++] += " ";
              cnt--;
              if( j === i - 1 && cnt > 0 )j = x
          }
          let tempStr = ""; j = x;
          while( j < i )tempStr += j < i - 1 ?  words[j++] + " " : words[j++];
          while( tempStr.length < maxWidth )tempStr += " "
          res.push(tempStr);
          str = "";
          x = i;
      }
      else str += words[i++] + " ";
  }
  if( str.length > 0 ){
      let cnt = maxWidth - str.length;
      while( cnt > 0 ){
          str += " ";
          cnt--;
      }
      res.push(str)
  }
  return res
};

 //const words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
 const words = ["Science","is","what","we","understand"]
 console.log(fullJustify(words, 16))


export default () => {
 
  
}


