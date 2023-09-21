// https://www.builder.io/blog/NodeJS-visualizing-nextTick-and-promise-queues

// Next Tick and promise queues

// It consists of six different queues:
// Microtask-queue: (1) nextTick and (2) promise queue.
// (3) Timer queue
// (4) I/O queue
// (5) Check queue (setImmediate)
// (6) Close queue (clean ups)

// For our first set of experiments, we'll be focusing on the nextTick queue and the promise queue

export default () => {
  Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
  process.nextTick(() => console.log("this is process.nextTick 1"));
}

// When the call stack executes line 1, it queues the callback function in the Promise queue.

// When the call stack executes line 2, it queues the callback function in the nextTick queue.

// There is no more user-written code to execute after line 2.

// Control enters the event loop, where the nextTick queue gets priority over the promise queue (it’s how the Node.js runtime works).

// The event loop executes the nextTick queue callback function and then the promise queue callback function.

// The console shows "this is process.nextTick 1", and then "this is Promise.resolve 1"\

// All callbacks in the nextTick queue are executed before callbacks in the promise queue.