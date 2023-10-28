



const mul = (a: number) => {
  return (b: number) => {
    return (c: number) => {
      return a * b * c
    }
  }
}

//const mul = (a: number) => (b: number) => (c: number) => a * b * c
 

const x = mul(2)(3)(4)
console.log("🚀 ~ x:", x)


//mul(2)(3)(4)

