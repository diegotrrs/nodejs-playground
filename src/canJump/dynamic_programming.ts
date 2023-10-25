
enum Info {
  Good,
  Bad,
  Unknown
}

const memo: Info [] = []


function canJumpFromPositionD(position: number, nums: number[]): boolean {
  const currentNumberOfJumps = nums[position]
  const lastPositionIndex = nums.length - 1
  
  //if(position === lastPositionIndex) return true

  if(memo[position] !== Info.Unknown){
    return memo[position] === Info.Good ? true : false
  }

  const furthestJump = Math.min(position + currentNumberOfJumps, lastPositionIndex)
  for(let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++){
    if(canJumpFromPositionD(nextPosition, nums)){
      memo[position] = Info.Good
      return true
    }    
  }

  return false
}

function canJumpD(nums: number[]): boolean {
  for(let i = 0; i < nums.length; i++){
    memo.push(Info.Unknown)
  }
  memo[nums.length - 1] = Info.Good 
  return canJumpFromPositionD(0, nums)
}

console.log(canJumpD([3,2,1,1,4]))