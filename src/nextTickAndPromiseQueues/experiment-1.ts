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
  console.log("console.log 1");
  process.nextTick(() => console.log("this is process.nextTick 1"));
  console.log("console.log 2");
}

// Line 15 is executed by being pushed onto the call stack.
// It logs the corresponding message

// Next, process.nextTick() is executed on the call stack. This queues up
// the callback function into next nextTick queue and is popped off.
// Since there is still user-written code to execute, the callback function has to
// wait for its turn.

// Execution moves on and the last console.log() statement is pushed onto the stack.

// Now, there is no more user-written synchronous code to execute, so control enters the event loop.


// The callback function from the nextTick queue is pushed onto the stack, console.log() is pushed onto the stack, executed, and the corresponding message is logged to the console.

// All user-written synchronous JavaScript code takes priority over async code that the runtime would like to eventually execute.

