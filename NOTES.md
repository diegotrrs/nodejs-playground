
# Asynchronous programming in Javascript

Javascript is:
  * synchronous: as seen in the example below a executes before b.
  * blocking: JavaScript is blocking because of its synchronous nature. No matter how long a previous process takes, the subsequent processes won't kick off until the former is completed.
  * single-threaded: A thread is simply a process that your JavaScript program can use to run a task. And each thread can only do one task at a time. Unlike a few other languages which support multi-threading and can thus run multiple tasks in parallel, JavaScript has just one thread called the main thread for executing any code.

```typescript
// Synchronous
// If we have two functions that log messages to the console, the code executes top-down, with only one line executing at any given time. In the code snippet, we see A is logged before B.

function A() {
  console.log("A");
}

function B() {
  console.log("B");
}

A()
B()
```

This model of JavaScript creates a problem because we have to wait for data to be fetched before we can continue code execution. 

# The Node.js runtime

![Overview of NodeJS architecture](img/Screenshot%202023-09-20%20at%2008.10.13.png)
The Node.js runtime allows execution of JS outside of the browser. It consists of 3 major components:
* External libraries like V8, crypto required by Node.js.
* C++ features that allow features like file system and networking.
* A JS library that exposes functions to use the inner functionality (C++, etc) and other util functions.

While all of the parts are important, they key component for handling asynchronous operations is a library called **Libuv**

# Libuv
**Libuv** is a cross-platform open-source library written in C. In the Node.js runtime, its role is to provide support for handling asynchronous operations. 

Let's go over how this works.

![V8 Engine and libuv](img/Screenshot%202023-09-20%20at%2009.23.13.png)
* The V8 engine handles the execution of JS code. It comprises of two data structures: a heap and a stack.
* Libuv is responsible for the execution of async code. Libuv run async tasks usinv native async mechanism of the operating system. In case the Operative systems are not available or not the best choice, Libuv uses its thread pool to run the task, ensuring the main thread is not blocked.

# Sync code execution

```typescript
console.log("First");
console.log("Second");
console.log("Third");
```

![sync-code-exec-1](img/Screenshot%202023-09-20%20at%2009.35.23.png)

![sync-code-exec-2](img/Screenshot%202023-09-20%20at%2009.36.17.png)

![sync-code-exec-2](img/Screenshot%202023-09-20%20at%2009.37.00.png)

* The main thread of execution always starts in the global scope.
* The global function, if we can call it that, is pushed onto the stack. Then, on line 1, we have a console log statement. The function is pushed onto the stack. Assuming this happens at 1 ms, "First" is logged to the console. Then, the function is popped off the stack.
* The engine executes the function whose execution context is at the top of the stack. When this function completes, its execution stack is popped off from the stack, and the control reaches to the context below it in the current stack.
* and so on...

When you run a simple script like:
```
console.log("Hello, World!");
```
This piece of code executes synchronously on the main thread without waiting for the event loop's asynchronous phases (like timers, I/O callbacks, etc.). The event loop doesn't need to check various queues because there are no asynchronous operations pending.

# Async code execution

* The global function is pushed onto the stack.

![1nd-async-exec](img/Screenshot%202023-09-20%20at%2013.18.22.png)

* Line 1 is pushed to the call stack and executed.
![2nd-async-exec](img/Screenshot%202023-09-20%20at%2013.19.39.png)

* The console.log("First") function is popped off the stack.
![3rd-async-exec](img/Screenshot%202023-09-20%20at%2013.21.52.png)

* The readFile method is pushed onto the stack. Since readFile is an asynchronous operation, it is off-loaded to libuv.

![4th-async-exec](img/Screenshot%202023-09-20%20at%2013.23.10.png)

* JavaScript pops off the readFile method from the call stack because its job is done as far as the execution of line 3 is concerned. In the background, libuv starts to read the file contents on a separate thread

![5th-async-exec](img/Screenshot%202023-09-20%20at%2015.07.50.png)

![6th-async-exec](img/Screenshot%202023-09-20%20at%2015.09.02.png)

* JavaScript proceeds to line 7, pushes the log function onto the stack, "Third" is logged to the console, and the function is popped off the stack.

![7th-async-exec](img/Screenshot%202023-09-20%20at%2015.09.34.png)

![8th-async-exec](img/Screenshot%202023-09-20%20at%2015.10.11.png)

* The file read task is completed in the thread pool. The associated callback function is now executed on the call stack. Within the callback function, the log statement is encountered.


![9th-async-exec](img/Screenshot%202023-09-20%20at%2015.11.23.png)

*That is pushed to the call stack, "Second" is logged to the console, and the log function is popped off. As there are no more statements to execute in the callback function, it is popped off as well.

![10th-async-exec](img/Screenshot%202023-09-20%20at%2015.16.17.png)
*That is pushed to the call stack, "Second" is logged to the console, and the log function is popped off. As there are no more statements to execute in the callback function, it is popped off as well. There's no more code to run, so the global function is also popped off the stack.

# Libuv and async operations
* For async operatiocs such as handling network request, Libuv relies on the operating system primitives.

* For async operations such as reading a file, libuv relies on its thread pool to ensure that the main thread is not blocked.
Some questions come from this:

- When an async task has finished, **at what point does Node decide to run the associated callback on the call stack?**

- Does Node wait for the call stack to be empty before running the callback function, or does it interrupt the normal flow of execution to run the callback function?

- What about other async methods like **setTimeout** and **setInterval**, which also delay the execution of a callback function?

- If two async tasks such as setTimeout and readFile complete at the same time, how does Node decide which callback function to run first on the call stack? Does one get priority over the other?

All of these questions can be answered by understanding the core part of libuv, which is the event loop.

# What is the event lopp?
* The event loop is just a C program.
* A design pattern that orchestrates or coordinates the execution of synchronous and asynchronous code in Node.js.

# Visualizing the event loop
* The event loop is a loop that runs as long as your Node.js app is up and running

* There are **six** different queues in every loop, each holding one or more callback functions that need to be **executed on the call stack eventually**.


![Event-loop](img/Screenshot%202023-09-20%20at%2016.24.30.png)

1. There is the timer queue (technically a mini heap) which holds callbacks associated with **setTimeout** and **setInterval**.

2. There is the I/O queue which contains callbacks associated with all the async methods such as methods associated with the **fs** and **http** modules.

> A tree-based data structure in which the value of a parent node is ordered in a certain way with respect to the value of its child node(s). A heap can be either a min heap (the value of a parent node is less than or equal to the value of its children) or a max heap (the value of a parent node is greater than or equal to the value of its children).

3. There is the check queue which holds callbacks associated with the setImmediate function.

> The setImmediate function is used to execute a function right after the current event loop finishes

4. There is the close queue which holds callbacks associated with the close events (clean up) of an async task.

5. Finally the *micro task queue* which contains two separate queues:

5.1 **nextTick queue** which holds callbacks associated with the process.nextTick function.

5.2 **promise queue** which holds callbacks associated with the native Promise in Javascript.

> timer, I/O, check, and close queues are all part of libuv. The two microtask queues, however, are not part of libuv. Nevertheless, they are still part of the Node runtime and play an important role in the order of execution of callbacks.


# How the event loop works
* All user-written synchronous JavaScript code takes priority over async code that the runtime would like to execute. This means that only after the call stack is empty does the event loop come into play.

* Within the event loop, the sequence of execution follows certain rules:

1. Any callbacks in the microtask queue are executed. First, tasks in the nextTick queue and only then tasks in the promise queue.

2. All callbacks within the timer queue are executed.

3. Callbacks in the microtask queue (if present) are executed after every callback in the timer queue. First, tasks in the nextTick queue, and then tasks in the promise queue.

4. All callbacks within the I/O queue are executed.

5. Callbacks in the microtask queues (if present) are executed, starting with nextTickQueue and then Promise queue.

6. All callbacks in the check queue are executed.

7. Callbacks in the microtask queues (if present) are executed after every callback in the check queue. First, tasks in the nextTick queue, and then tasks in the promise queue.

8. All callbacks in the close queue are executed

9. For one final time in the same loop, the microtask queues are executed. First, tasks in the nextTick queue, and then tasks in the promise queue.

If there are more callbacks to be processed at this point, the loop is kept alive for one more run, and the same steps are repeated. On the other hand, if all callbacks are executed and there is no more code to process, the event loop exits.

Revisiting the questions mentioned above:

**When an async task completes in libuv, at what point does Node decide to run the associated callback function on the call stack?**
Callback functions are executed only when the call stack is empty.

**Does Node wait for the call stack to be empty before running the callback function, or does it interrupt the normal flow of execution to run the callback function?**
The normal flow of execution will not be interrupted to run a callback function.

**If two async tasks such as setTimeout and readFile complete at the same time, how does Node decide which callback function to run first on the call stack? Does one get priority over the other?**
Timer callbacks are executed before I/O callbacks, even if both are ready at the exact same time.

# Reference
[A Complete Visual Guide to Understanding the Node.js Event Loop](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)

# Other links
[Explaining event loop in 100 lines of code](https://iximiuz.com/en/posts/explain-event-loop-in-100-lines-of-code/)
[Explaining async/await in 200 lines of code](https://iximiuz.com/en/posts/from-callback-hell-to-async-await-heaven/)
[You Don’t Know Node.js EventLoop](https://blog.bitsrc.io/you-dont-know-node-js-eventloop-8ee16831767)