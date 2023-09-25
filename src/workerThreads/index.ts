import express from "express";
// In node libuv has 4-6 threads for I/O operations (read files, network requests)

import { Worker } from "worker_threads";

const app = express();

app.use(express.json());
app.get("/non-blocking", (_req, response) => {
  response.send("This page is not blocking");
});

app.get("/blocking", (_req, response) => {
  // We trigger a new thread, instead of running it in the main Thread
  const worker = new Worker("./dist/workerThreads/worker.js")
  worker.on("message", (data)=> {
    response.status(200).send(data);
  }) 

  worker.on("error", (error)=> {
    response.status(404).send(`An error ocurred ${error}`);
  }) 
  
  /*
  The following code would block the other endpoint 
  since it's a CPU heavy task, not an I/O which is handled
  by libuv threads in an async way.

  let counter = 0;
  for (let I = 0; I < 20_000_000_000; I++) {
    counter++
  }
  response.status(200).send(counter);
  */
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. Process id ${process.pid}`);
});

export default app;
