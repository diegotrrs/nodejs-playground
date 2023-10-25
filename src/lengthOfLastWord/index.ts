function lengthOfLastWord(s: string): number {
  const words = s.trim().split(" ")
  return words[words.length-1].length
};

// function lengthOfLastWord(s: string): number {
//   const s1 = s.trim()
//   const index = s1.lastIndexOf(" ")
//   if(index === -1){
//     return s1.length
//   }
//   return s1.length - index - 1 
// };
