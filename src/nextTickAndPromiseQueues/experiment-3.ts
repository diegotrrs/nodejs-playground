// https://www.builder.io/blog/NodeJS-visualizing-nextTick-and-promise-queues

// Next Tick and promise queues

// It consists of six different queues:
// Microtask-queue: (1) nextTick and (2) promise queue.
// (3) Timer queue
// (4) I/O queue
// (5) Check queue (setImmediate)
// (6) Close queue (clean ups)

// For our first set of experiments, we'll be focusing on the nextTick queue and the promise queue

export default async () => {

  const delay = (delayInMilliseconds: number) =>
    new Promise((resolve) => { 
      return setTimeout(resolve, delayInMilliseconds)
    });

  
  const asyncFunction = async () => {
    console.log('Sync code 2');
    Promise.resolve().then(() => console.log("Promise callback 1"));
    
    
    // IMPORTANT: console.log('Sync code 3'); is NOT ACTUALLY sync code since await can be actually written as below
    // await delay(2000);
    // console.log('Sync code 3');

    
    delay(2000).then(() => {
        console.log('Promise callback 4');
    });
    
  }

  const test = () => {
    Promise.resolve().then(() => console.log("Promise callback 2"));
  }
  
  const test2 = () => {
    process.nextTick(() => console.log("nextTick callback"));
  }

  console.log('Sync code 1');
  asyncFunction()
  
  
  console.log('Sync code 4');
  
  test2()
  test()
  
  Promise.resolve().then(() => console.log("Promise callback 3"));
}
