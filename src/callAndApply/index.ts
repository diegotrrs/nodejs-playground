function sayHello(aa: string, bb: string) {
  // @ts-ignore
  console.log(`Hello, ${this.name} ${aa} ${bb}!`);
}

const person = { name: 'John' };

//sayHello.call(person, "xxx"); // Outputs: "Hello, John!"
sayHello.apply(person, ["xxx", "aaa"]); // Outputs: "Hello, John!"