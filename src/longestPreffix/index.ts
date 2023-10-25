function longestCommonPrefix(words: string[]): string {
   let longestPrefix = words[0]
   for(let i = 1; i < words.length; i++){
      const word = words[i]
     
      const characters = [...word]

      let index = -1
      for(let i=0; i<= characters.length -1; i++){
        const character = characters[i]

        if(i > longestPrefix.length - 1){
          break;
        }
        
        if(character === longestPrefix[i]){
          index = i
        } else {
          break;
        }
      }
      longestPrefix = longestPrefix.substring(0, index+1)
    
 
   }

   return longestPrefix || ""
 
 };

 function longestCommonPrefixMyEditorial(strs: string[]): string {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {

      while (strs[i].indexOf(prefix) !== 0) {
          prefix = prefix.substring(0, prefix.length - 1);
          if (prefix.length === 0) return "";
      }

  }
  return prefix;
}


/*
  flower
  flow
  flight

  -> prefix: flower

*/

 function longestCommonPrefixEditorial(strs: string[]): string {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
      console.log(`>>>>> strs[i] ${strs[i]} prefix ${prefix}`)
      // Remove the last letter until both words have the same beginning (prefix)
      while (strs[i].indexOf(prefix) !== 0) {
          let oldPrefix = prefix
          prefix = prefix.substring(0, prefix.length - 1);
          console.log(`oldPrefix ${oldPrefix} newPrefix ${prefix} strs[i].indexOf(prefix)`)

          if (prefix.length === 0) return "";
      }
  }
  return prefix;
}

//const common = longestCommonPrefix(["xxx","aaa","bbb"])
//const common = longestCommonPrefix(["ab","a"])


//const common = longestCommonPrefix(["dog"])
//console.log(`common:${longestCommonPrefix(["flower","xxx"])}.`)

//console.log(`common:${longestCommonPrefixEditorial(["flower","flow","flight"])}.`)
//console.log(`common:${longestCommonPrefix(["ab","a"])}.`)

//console.log("hola".substring(0,0))

console.log("aca".indexOf("c"))
