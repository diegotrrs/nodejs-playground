/**
 * 
 * Functions have their own this value (usually the caller).
 * Arrow functions DO NOT their own this, instead they inherent the this from the context.
 */


function regularFunc() {
  console.log("🚀 ~ regularFunc ~ >>>>")
  // @ts-ignore
  console.log(this); // 'this' refers to the calling context
}

const obj = {
  regularFunc: regularFunc
};

obj.regularFunc(); // 'this' refers to 'obj'

// @ts-ignore
const constructorFunc = new regularFunc(); // Creates an instance of 'regularFunc'


const arrowFunc = () => {
   // @ts-ignore
  console.log(this); // 'this' refers to the lexical scope (e.g., the outer function or global context)
}

const obj2 = {
  arrowFunc: arrowFunc
};

 // @ts-ignore
 obj2.arrowFunc(); // 'this' still refers to the lexical scope, not 'obj'

// Cannot be used as a constructor:
// const instance = new arrowFunc(); // Throws an error
