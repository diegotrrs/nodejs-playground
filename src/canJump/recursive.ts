

function canJumpFromPosition(position: number, nums: number[]): boolean {
  const currentNumberOfJumps = nums[position]
  const lastPositionIndex = nums.length - 1
  
  if(position === lastPositionIndex) return true

  const furthestJump = Math.min(position + currentNumberOfJumps, lastPositionIndex)
  for(let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++){
    if(canJumpFromPosition(nextPosition, nums)){
      return true
    }    
  }

  return false
}

function canJumpR(nums: number[]): boolean {
  return canJumpFromPosition(0, nums)
}