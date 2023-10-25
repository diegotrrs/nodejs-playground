// // const user1 = {
// //     name: 'Robert Joe',
// //     age: 30,
// //     getMe() {
// //       return `${this.name} is ${this.age} years old.`;
// //     }
// //   };

// //   const user2 = {
// //     name: 'Laura Dash',
// //     age: 25
// //   };

// //   console.log(user1.getMe.call(user2));
// //   console.log(user1.getMe.apply(user2));

// // events eventEmitter

// //   const EventEmitter = require('events');

// //   var status = "Pending"
// //   class PaymentStatus extends EventEmitter {

// //     async setStatus(value: string) {
// //         setTimeout(() => { this.emit('status-changed', value); }, 1000);

// //     }

// //   }

// //   const paymentStatusx = new PaymentStatus();

// //   paymentStatusx.on('status-changed', (value: string) => {
// //       status = value
// //   });

// //   console.log(status)

// //   paymentStatusx.setStatus('In progress')
// //   paymentStatusx.setStatus('paid')

// /**
//   Print in sequence

//   if this code is run multiple times, it should always log the characters in sequence
//   this log should only show when all values are returned, not individually

//   NOTE: getValueBack needs to be called as this is simulating an async request

//   expected output:
//   log 1: w
//   log 2: e
//   log 3: a
//   log 4: v
//   log 5: r
//  */

// // code you can act on
// // const printInSameOrder = async (values: string[]) => {
// // //   for(let value of values){
// // //     await getValueBack(value).then(console.log);
// // //   }
// //     let promises = values.map((value) => getValueBack(value));
// //     const responses = await Promise.all(promises)
// //     responses.forEach((response, i) => console.log(`${i+1}: ${response}`))
// // };

// // // read only from here
// // // do not change the following part
// // const getValueBack = async (value: string): Promise<string> => {
// //   await sleep();
// //   return value;
// // };

// // const sleep = () => {
// //   const sleepTime = Math.floor(Math.random() * 1000);
// //   return new Promise((r) => setTimeout(r, sleepTime));
// // };

// // const arrayToBePrintedInSameOrder = ["w", "e", "a", "v", "r"];
// // printInSameOrder(arrayToBePrintedInSameOrder);

// /**
//  * 
//   Rate limiter
//   There's a rate limit of 4 requests every 1 second
//   We need to make sure that all requests are performed
//   expected output:
//   log 1: processed request 0
//   log 2: processed request 1
//   log 3: processed request 2
//   log 4: processed request 3
//   log 5: processed request 4
//   log 6: processed request 5
//   log 7: processed request 6
//   log 8: processed request 7
//   log 9: processed request 8
//   log 10: processed request 9
//   log 11: processed request 10
//  */

// // code you can act on

// const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));


// // const run = async () => {
// //     for (let i = 0; i < 11; i++) {
// //       try {
// //         console.log('ABOUT TO PROCESS', i)
// //         handleRequest(i)
// //         console.log("processed request", i);
// //       } catch (error) {
// //         console.error("Error:", error);
// //         await wait(2000); // Wait for 1 second if the rate limit is exceeded
// //         i--; // Retry the same request
// //       }
// //     }
// //   };

  
// const run = async () => {
//     const requestIdsQueue: number [] = [];
    
//     for (let i = 0; i < 11; i++) {
//       // In this case the ids are sequential, but they don't have to be
//       requestIdsQueue.push(i);
//     }
    
//     while (requestIdsQueue.length > 0) {
//       const requestId = requestIdsQueue.shift()!; 

//       try {
//         handleRequest(requestId)
//         //console.log("processed request", requestId, requestQueue);
//         console.log("processed request", requestId);
//       } catch (error) {
//         //@ts-ignore
//         // Commenting out the below line as it is not expected to be in the output

//         // Retry the same request (Move it to the front of the queue)
//         requestIdsQueue.splice(0, 0, requestId);
//         // Wait for 1 second if the rate limit is exceeded
//         await wait(1000); 
//       }
//     }
//   };
  

// //   const run = async () => {
// //     for (let i = 0; i < 11; i++) {
// //       console.log("processed request", handleRequest(i));
// //     }
// //   };

// // read only
// let requestLimiterCount = 0;
// let requestLimiterTimeout: number;
// const handleRequest = (value: number) => {
//   requestLimiterCount++;
//   if (requestLimiterCount > 4) throw Error("rate limit");

//   clearTimeout(requestLimiterTimeout);
//   // @ts-ignore
//   requestLimiterTimeout = setTimeout(() => (requestLimiterCount = 0), 1000);
//   return value;
// };

// run();

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const run = async () => {
    const requestIdsQueue: number [] = [];
    
    for (let i = 0; i < 11; i++) {
      // In this case the ids are sequential, but they don't have to be
      requestIdsQueue.push(i);
    }
    
    while (requestIdsQueue.length > 0) {
      const requestId = requestIdsQueue.shift()!; 

      try {
        handleRequest(requestId)
        console.log("processed request", requestId);
      } catch (error) {
        // Not logging out the error since it's not expected to be in the output
        // Retry the same request (Move it to the front of the queue)
        requestIdsQueue.splice(0, 0, requestId);
        // Wait for 1 second if the rate limit is exceeded

        await wait(1000); 
      }
    }
  };

let requestLimiterCount = 0;
let requestLimiterTimeout: number;
const handleRequest = (value: number) => {
  requestLimiterCount++;
  if (requestLimiterCount > 4) throw Error("rate limit");

  clearTimeout(requestLimiterTimeout);
  // @ts-ignore
  requestLimiterTimeout = setTimeout(() => (requestLimiterCount = 0), 1000);
  return value;
};

run();