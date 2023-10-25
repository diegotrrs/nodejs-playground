/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
  //console.log(nums.slice(2,3))
  const right = nums.slice(k,nums.length)
  const left = nums.slice(0,k)

  console.log('right', right)
  console.log('left', left)
  //console.log(...left, ...right)
  const x = [...right, ...left]
  console.log(x)
  
 };
 
 // array = [1,2,3,4,5,6,7] k = 3 =>  [5,6,7,1,2,3]

 rotate([0,1,2,3,4,5,6], 3)