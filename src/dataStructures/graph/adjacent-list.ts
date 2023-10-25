function depthFirstTraversal(graph: number [][], current: number, visited: Set<number>){
  visited.add(current)
  for(const neighbor of graph[current]){
    if(!visited.has(neighbor)){
      depthFirstTraversal(graph, neighbor, visited)
    }
  }
}

function iterateDFS(graph: number[][]){
  const numCourses = graph.length
  const visited = new Set<number>()
  for(let i = 0; i < numCourses; i++ ){
    if(!visited.has(i)){
      depthFirstTraversal(graph, i, visited);

    }
  }
}


function breadthFirstTraversalNonRecursive(graph: number [][], start: number) {
  const visited = new Set();
  const queue: number[] = [];

  // Start with the initial node and mark it as visited
  queue.push(start);
  visited.add(start);

  while (queue.length > 0) {
      const current = queue.shift()!; // Dequeue the first node in the queue
      console.log(current); // Process or visit the current node

      for (const neighbor of graph[current]) {
          if (!visited.has(neighbor)) {
              queue.push(neighbor); // Enqueue unvisited neighbors
              visited.add(neighbor); // Mark them as visited
          }
      }
  }
}




const graphExample = [[1,0],[2,0],[0,1]] //adjacent list instead of adjacent matrix