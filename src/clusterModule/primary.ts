import cluster from 'cluster'
// Clusters of Node.js processes that can be used to run multiple
// instances of Node.js that can distribute workloads among 
// their application threads.
// IMPORTANT: When process isolation is not needed, use the worker_threads instead
import os from "os"
import { dirname } from "path"
import { fileURLToPath } from "url"

// const __dirname = dirname(fileURLToPath(import.meta.url))
// for import.meta.url) we need to change module related ts settings.

const cpuCount = os.cpus().length

/*

The cluster module provides a way of creating child PROCESSES that
run in the same server port.
Each spawned process has its own event loop, memory and V8 instance.  

https://blog.appsignal.com/2021/02/03/improving-node-application-performance-with-clustering.html

If you run the loadtest then we shouldn't get more errors since now there are different processes to handle this.

*/
export default () => {
  console.log(`Total number of CPUs is ${cpuCount}`)
  console.log(`Primary pid=${process.pid}`)
  console.log( __dirname + "/index.js")
  cluster.setupPrimary({
    exec: __dirname + "/index.js"
  })
  
  for(let i = 0; i < cpuCount; i++){
    console.log('FORKING')
    cluster.fork()
  }
  
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} has been killed`)
    console.log(`Starting another worker`)
    cluster.fork()
  });
}

