
// Mergesort O(n lg n)

export const combineSortedArrays = (array1: number [], array2: number[]) => {  
  let array1Index = 0
  let array2Index = 0
  const finalArray = []

  while(array1Index < array1.length && array2Index < array2.length){    
    if(array1[array1Index] <= array2[array2Index]){
      finalArray.push(array1[array1Index])
      array1Index++
    } else {
      finalArray.push(array2[array2Index])
      array2Index++
    }
  }

  if(array1Index < array1.length){
    finalArray.push(...array1.slice(array1Index, array1.length))
  } else if(array2Index < array2.length){
    
    finalArray.push(...array2.slice(array2Index, array2.length))
  }
  return finalArray
}

export const mergeSort = (array: number[]): number[] => {
  if(array.length == 1){
    return array
  }
  
  // Rounded down
  const halfOfArray = Math.floor(array.length / 2)

  const firstHalf = array.slice(0, halfOfArray)
  const secondHalf = array.slice(halfOfArray, array.length)
  
  const firstHalfSorted = mergeSort(firstHalf)
  const secondHalfSorted = mergeSort(secondHalf)

  const mergedArray = combineSortedArrays(firstHalfSorted, secondHalfSorted)
  return mergedArray
} 

console.log(mergeSort([2,4,10,2,4,5,6,100,7]))

console.log(mergeSort([-2,100,10,2,40,5,6,100,7]))