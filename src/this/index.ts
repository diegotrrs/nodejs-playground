
// function foo() {
//   // @ts-ignore 
//   console.log( this.bar ); 
// }
//   var bar = "global";

//   var obj1 = {
//     bar: "obj1",
//     foo: foo
//   };

//   var obj2 = {
//     bar: "obj2"
//   };

//   foo();
//   obj1.foo();
//   // @ts-ignore 
//   foo.call(obj2);
//   // @ts-ignore 
//   new foo();


//const ui = (() => { return 3 })()
const ui = (
  function (){
    return 12
  }
)()


var Employee = {
  company: 'x'
}

const x1 = Object.create(Employee)
console.log("🚀 ~ x1:", x1)

0.1 + 0.2 === 0.3
console.log("🚀 ~ 0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3)



