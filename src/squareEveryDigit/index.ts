export class Kata {
  static squareDigits(num: number): number {
    // may the code be with you
    const string_n = num + ""
    const digits = [...string_n]
    const squared= digits.map((digit) => {
      return Math.pow(Number.parseInt(digit), 2)
    })
    return Number.parseInt(squared.join(""))
  }
}



function removeElement(nums: number[], val: number): number {
    let k = 0
    for(const n of nums){
      console.log(n)
        if(n !== val){            
            nums[k] = val
            k++
        }
    }
    return k
};

console.log(removeElement([3,2,2,3], 3))