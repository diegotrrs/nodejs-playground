const numbers = [1, 2, 3, 4, 5, 5];

type Result = Record<string, number>;

//const sum = customReduce(numbers, (acc, current) => acc + current, 0);

const a = numbers.reduce<Result>(
  (accum: Result, currentElement: number, currentIndex: number) => {
    console.log("🚀 ~ a ~ currentElement:", currentElement);

    if (!accum[currentElement]) {
      accum[currentElement] = 0;
    }

    accum[currentElement]++;

    return accum;
  },
  {}
);

// const customReduce = <T, U>(array: T[], reducer: (accum: U, currentElement: T) => U, initialValue: U) => {
//   let accum = initialValue
//   for(let i of array){
//     accum = reducer(accum, i, )
//   }

//   return accum
// }
// const b = customReduce<number, Result>(numbers, ((accum: Result, currentElement: number) => {
//   if(!accum[currentElement]){
//     accum[currentElement] = 0
//   }

//   accum[currentElement]++

//   return accum
// }), {})

const customReduce = <T, U>(
  array: T[],
  reducer: (accum: U, currentElement: T) => U,
  initialValue: U
) => {
  let accum = initialValue;
  for (let i of array) {
    accum = reducer(accum, i);
  }
  return accum;
};

const b = customReduce<number, Result>(numbers, (accum, currentElement) => {
  if (!accum[currentElement]) {
    accum[currentElement] = 0;
  }

  accum[currentElement]++;

  return accum;
}, {});



Array.prototype.myReduce = function<T, U>(
  reducer: (accum: U, currentElement: T) => U,
  initialValue: U
): U {
  let accum = initialValue;
  for (let i of this) {
    accum = reducer(accum, i);
  }
  return accum;
};





export default () => {
  const c = numbers.myReduce<Result>((accum: Result, currentElement: number) => {
    if (!accum[currentElement]) {
      accum[currentElement] = 0;
    }
  
    accum[currentElement]++;
  
    return accum;
  }, {});
  
  console.log("🚀 ~ a ~ a:", a);
  console.log("🚀 ~ b ~ b:", b);
  console.log("🚀 ~ c ~ c:", c);
}
