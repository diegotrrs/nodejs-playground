
import { Worker, parentPort } from 'worker_threads';

let counter = 0;
for (let I = 0; I < 20_000_000_000; I++) {
  counter++
}
parentPort?.postMessage(counter)