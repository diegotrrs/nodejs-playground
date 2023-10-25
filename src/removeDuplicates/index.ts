function removeDuplicates(nums: number[]): number {
  let k = 0;
  const numCounters: { [key: number]: number } = {}
  for (let i = 0; i < nums.length; i++){
      const num = nums[i]
      // if(!numCounters[num]){
      //   //console.log('JEY')
      //     numCounters[num] = 0
      // }
      numCounters[num] = (numCounters[num] || 0 ) + 1

      if(numCounters[num] <= 2){
        console.log(`num: ${num} numCounters[num]: ${numCounters[num]}`)
           nums[k] = num
           k++
      }
      
  }
  return k;
};

const n = [1,1,1,2,2,3]
const k = removeDuplicates(n)
console.log(n, k)

