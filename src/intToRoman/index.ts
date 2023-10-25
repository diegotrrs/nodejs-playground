// function intToRoman(num: number): string {
//   let mapping: Record<string, number> = {
//     M:1000,
//     CM:900,
//     D:500,
//     CD:400,
//     C:100,
//     XC:90,
//     L:50,
//     XL:40,
//     X:10,
//     IX:9,
//     V:5,
//     IV:4,
//     I:1
//   }

//   let romanRepresentation = ""
//   let nn = num
//   for(let i in mapping){
//     console.log(i)
//     const count = nn / mapping[i]
//     romanRepresentation += i.repeat(count)
//     nn = nn % mapping[i]
//   }
//   return romanRepresentation
// };

function intToRoman(num: number): string {
  let mapping: Record<string, number> = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }

  const romanRepresentation = Object.keys(mapping).reduce((acc, curr) => {    
    const count = acc.currentNumber / mapping[curr]
    acc.romanRepresentation += curr.repeat(count)
    acc.currentNumber = acc.currentNumber % mapping[curr]
    return acc
  }, {
    romanRepresentation: "",
    currentNumber: num,
  })

  return romanRepresentation.romanRepresentation
};

console.log(intToRoman(1994))

