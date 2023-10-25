/*
Summarize the values for 24-hour windows for the given data:
*/

export const data = [
  {
    "timestamp": 2,
    "value": 2
  },
  {
    "timestamp": 6,
    "value": 6
  },
  {
    "timestamp": 13,
    "value": 13
  },
  {
    "timestamp": 18,
    "value": 18
  },
  {
    "timestamp": 19,
    "value": 19
  }, 
  {
    "timestamp": 20,
    "value": 20
  },
  {
    "timestamp": 55,
    "value": 55
  },   
];



//data.sort((a, b) => (a.timestamp - b.timestamp))

// the function expected by the sort function returns
// -1 if the first argument is less than the second one
// 0 if both are the same
// 1 if the second one is higher
//datax.sort(() => (-1))


/*
Sort:
- It mutates the array and returns a reference to it.
- It expects a function that returns -1 if the a < b, 0 if  a === b, or 1 if a > b
- If we wanted to decreasingly order BASED ON POSITION the array we would just do return -1, for an increasing order we would do 1. But this would be just on position
*/

data.sort((a,b) => (a.timestamp - b.timestamp))


const msIn24hours = 24 * 60 * 60 * 1000

const windowSize = 10 // msIn24hours USE msIn24hours instead of 10

let windowStart = data[0].timestamp
let windowEnd = windowStart + windowSize
let windowFirstValue = 0
let windowLatestValue = 0
let currentWindowAccum = 0
let currentWindowCount = 0
const summarisedData = []

for(let dataEntry of data){
  // If it's within the window
  if(windowStart <= dataEntry.timestamp && dataEntry.timestamp <= windowEnd){       
    if(windowFirstValue === 0){
      windowFirstValue = dataEntry.value
    }
    currentWindowCount++
    windowLatestValue = dataEntry.value

  } else {
    if(currentWindowCount > 0) {
      summarisedData.push({
        windowStart,
        windowEnd,
        difference: windowLatestValue - windowFirstValue
      })
    }
      
    windowStart = dataEntry.timestamp
    windowEnd = windowStart + windowSize
    windowFirstValue = dataEntry.value
    windowLatestValue = dataEntry.value
    currentWindowCount = 1
  }
}

if(currentWindowCount > 0) {
  summarisedData.push({
    windowStart,
    windowEnd,
    difference: windowLatestValue - windowFirstValue
  })
}

console.log(summarisedData)