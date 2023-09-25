
import { workerData, parentPort } from 'worker_threads';
console.log('workerData.thread_count', workerData.thread_count)
let counter = 0;

for (let I = 0; I < 20_000_000_000 / workerData.thread_count; I++) {
  counter++
}
parentPort?.postMessage(counter)