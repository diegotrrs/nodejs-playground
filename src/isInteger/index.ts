const a = 2.2

function duplicate(a: number[]){
  return [...a, ...a]
}


console.log("🚀 ~ a % 1 === 0:", a % 1 === 0)
console.log(duplicate([1,3,4]))
