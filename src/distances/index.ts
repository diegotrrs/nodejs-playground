const euclidean = (v1: number[], v2: number[]) => {
  if (v1.length !== v2.length) throw new Error("Points must have the same size")

  let sum = 0
  for (let index = 0; index < v1.length; index++) {
    const element = Math.pow(v2[index] - v1[index], 2);
    sum+= element
  }
  return Math.sqrt(sum)
}

const manhathan = (v1: number[], v2: number[]) => {
  if (v1.length !== v2.length) throw new Error("Points must have the same size")

  let sum = 0
  for (let index = 0; index < v1.length; index++) {
    const element = Math.abs(v2[index] - v1[index]);
    sum+= element
  }
  return sum
}

export default () => {

  // h2 = cateto2 + cateto2 
  // h = square(cateto2 + cateto2)

  // c2 = a2 + b2
  // c2 = (x2 - x1)2 + (y2-y1)2
  // Square c = Square((x2 - x1)2 + (y2-y1)2)

  const vector1 = [1,2,3,4]
  const vector2 = [5,6,7,8]

  console.log("Euclidean", euclidean(vector1, vector2))
  console.log("Manhathan", manhathan(vector1, vector2))

}