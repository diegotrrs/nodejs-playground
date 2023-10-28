
const createBase = (x: number) => {
  return (y: number) => {
    return x + y
  }
}

var addSix = createBase(6);


console.log("🚀 ~ addSix(10):", addSix(10))
