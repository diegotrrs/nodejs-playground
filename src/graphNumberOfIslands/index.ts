
function explore(grid: string[][], x: number, y: number){
  if(grid[x]?.[y] !== '1'){
    return
  }
  grid[x][y] = '0'
  explore(grid, x + 1, y)
  explore(grid, x - 1, y)
  explore(grid, x, y + 1)
  explore(grid, x, y - 1)
}


function numIslands(grid: string[][]): number {
  let sol = 0
  grid.forEach((row, rowIndex) => {
    row.forEach((ele, colIndex) => {
      if(ele === '1'){
        sol++;
        explore(grid, rowIndex, colIndex)
      }
    })
  })
  return sol    
};