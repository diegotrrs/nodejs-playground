import express from "express";
// In node libuv has 4-6 threads for I/O operations (read files, network requests)

import { Worker } from "worker_threads";

const app = express();
const THREAD_COUNT = 4
app.use(express.json());
app.get("/non-blocking", (_req, response) => {
  response.send("This page is not blocking");
});


function createWorker(){
  return new Promise((resolve, reject) => {
    const worker = new Worker("./dist/workerThreads/four-worker.js", { workerData: { thread_count: THREAD_COUNT} })
    worker.on("message", (data)=> {
      resolve(data)
    }) 
  
    worker.on("error", (error)=> {
      reject(error)
    }) 
  })
}

app.get("/blocking", async (_req, response) => {
  // We trigger a new thread, instead of running it in the main Thread
 
  const workerPromises: any [] = [];
  for (let index = 0; index < THREAD_COUNT; index++) {
    workerPromises.push(createWorker())
    
  }

  const thread_results = await Promise.all(workerPromises)
  
  const total = parseInt(thread_results[0]) + parseInt(thread_results[1]) + parseInt(thread_results[2]) + parseInt(thread_results[3])  
  response.json({total: total})
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
