/*
Summarize the values for 24-hour windows for the given data:
*/

const datax = [
  {
    "timestamp": 7,
    "value": 12.13
  },
  {
    "timestamp": 15,
    "value": 12.13
  },
  {
    "timestamp": 36,
    "value": 12.13
  },
  {
    "timestamp": 2,
    "value": 12.13
  },
  {
    "timestamp": 81,
    "value": 12.13
  },  
];

const data = [
  {
    "timestamp": 1685537688343,
    "value": 12.13
  },
  {
    "timestamp": 1685540280343,
    "value": 14.74
  },
  {
    "timestamp": 1685542872343,
    "value": 13.24
  },
  {
    "timestamp": 1685545464343,
    "value": 13.82
  },
  {
    "timestamp": 1685548056343,
    "value": 15.17
  },
  {
    "timestamp": 1685550648343,
    "value": 13.91
  },
  {
    "timestamp": 1685553240343,
    "value": 14.26
  },
  {
    "timestamp": 1685555832343,
    "value": 14.99
  },
  {
    "timestamp": 1685558424343,
    "value": 12.45
  },
  {
    "timestamp": 1685561016343,
    "value": 11.78
  } 
];


//data.sort((a, b) => (a.timestamp - b.timestamp))

// the function expected by the sort function returns
// -1 if the first argument is less than the second one
// 0 if both are the same
// 1 if the second one is higher
datax.sort(() => (-1))


/*
Sort:
- It mutates the array and returns a reference to it.
- It expects a function that returns -1 if the a < b, 0 if  a === b, or 1 if a > b
- If we wanted to decreasingly order BASED ON POSITION the array we would just do return -1, for an increasing order we would do 1. But this would be just on position
*/

console.log(datax)