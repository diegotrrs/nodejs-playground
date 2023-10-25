// function majorityElement(nums: number[]): number {
//   const majorityTimes = nums.length / 2
//   const numberCounters = nums.reduce<{ [key: number] : number }>((accum, currentN) => {
//       accum[currentN]  = (accum[currentN] || 0) + 1
//       return accum
//   }, {})

//   for(const key in numberCounters){
//       if(numberCounters[key] >= majorityTimes){
//           return Number.parseInt(key)
//       }
//   }
//   return -1
// };

function majorityElement2(nums: number[]): number {
  const majorityTimes = nums.length / 2
  const numberCounters = new Map()

  for(let num of nums){
      let freq = (numberCounters.get(num) ?? 0) + 1
      numberCounters.set(num, freq)
      if(freq > nums.length / 2) return num;
  }
  return -1
};

function majorityElement(nums: number[]): number {
  const sorted = nums.sort()
  console.log(sorted)
  console.log(Math.floor(nums.length / 2))
  return sorted[Math.floor(nums.length / 2)];
};

function majorityElement3(nums: number[]): number {
  let candidate;
  let count = 0;
  candidate = nums[0]
  
  for (const num of nums) {
      console.log(`>>>>>>>>>>>>>>>>>>>>>>>> num ${num}`) 
      if (count === 0) {
          console.log('> new candidate', num)
          candidate = num;
      }
      const oldCount = count
      count += (num === candidate) ? 1 : -1
      console.log(`> oldCount ${oldCount} count ${count}`)
  }
  
  return candidate;
};


const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4, 5, 5, 5];
console.log(majorityElement(nums))