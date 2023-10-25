
// https://www.youtube.com/watch?v=NH98IXTYyFU




function convert(s: string, numRows: number): string {
  if (numRows === 1) {
      return s;
  }

  const n = s.length;
  const sections = Math.ceil(n / (2 * numRows - 2));
  const numCols = sections * (numRows - 1);

  const matrix: string[][] = new Array(numRows).fill(0).map(() => new Array(numCols).fill(' '));
  //console.log(`matrix`,matrix)
  let currRow = 0, currCol = 0;
  let currStringIndex = 0;

  // Iterate in zig-zag pattern on matrix and fill it with string characters.
  while (currStringIndex < n) {
      // Move down.
      while (currRow < numRows && currStringIndex < n) {
          matrix[currRow][currCol] = s[currStringIndex];
          currRow++;
          currStringIndex++;
      }

      currRow -= 2;
      currCol++;

      // Move up (with moving right also).
      while (currRow > 0 && currCol < numCols && currStringIndex < n) {
          matrix[currRow][currCol] = s[currStringIndex];
          currRow--;
          currCol++;
          currStringIndex++;
      }
  }

  const answer = matrix.map(row => row.join('')).join('');
  return answer.replaceAll(' ', '');
}


function convertX(s: string, numRows: number): string {
  if (numRows === 1) {
      return s;
  }

  const n = s.length;
  const sections = Math.ceil(n / (2 * numRows - 2));
  const numCols = sections * (numRows - 1);

  const matrix: string[][] = new Array(numRows).fill(0).map(() => new Array(numCols).fill(' '));
  //console.log(`matrix`,matrix)
  let currRow = 0, currCol = 0;
  let currStringIndex = 0;

  // Iterate in zig-zag pattern on matrix and fill it with string characters.
  while (currStringIndex < n) {
      // Move down.
      while (currRow < numRows && currStringIndex < n) {
         
      }

      currRow -= 2;
      currCol++;

      // Move up (with moving right also).
      while (currRow > 0 && currCol < numCols && currStringIndex < n) {
         
      }
  }

  const answer = matrix.map(row => row.join('')).join('');
  return answer.replaceAll(' ', '');
}

// Example usage:
const inputString = "PAYPALISHIRING";
const numRows = 3;

console.log(convert(inputString, numRows)); // Output: "PAHNAPLSIIGYIR"
console.log(convertX(inputString, numRows)); // Output: "PAHNAPLSIIGYIR"