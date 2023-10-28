const counter = () => {
  let c = 0;

  return {
    add: (x: number) => {
      c += x
    },
    resolve: () => {
      return c
    }
  }
}

const c = counter()
c.add(3)
c.add(6)
console.log("🚀 ~ c.resolve():", c.resolve())

