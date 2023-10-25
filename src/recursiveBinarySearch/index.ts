function recursiveBinarySearch(arr: number[], x: number, l: number, r: number): number {
  if (l <= r) {
      const mid = Math.floor((l + r) / 2);

      // If the element is present at the middle
      if (arr[mid] === x) return mid;

      // If the element is smaller than mid, search the left subarray
      if (arr[mid] > x) {
          return recursiveBinarySearch(arr, x, l, mid - 1);
      }

      // Else search the right subarray
      return recursiveBinarySearch(arr, x, mid + 1, r);
  }

  // If the element is not present in the array
  return -1;
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = recursiveBinarySearch(sortedArray, target, 0, sortedArray.length - 1);
