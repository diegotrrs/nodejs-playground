// https://stackfull.dev/graph-data-structure-in-typescript

export default () => {
  const _1 = new GraphNode(1)
  const _2 = new GraphNode(2)
  const _3 = new GraphNode(3)
  const _4 = new GraphNode(4)
  const _5 = new GraphNode(5)
  const _6 = new GraphNode(6)
  const _7 = new GraphNode(7)

  _1.addNeighbor(_2)
  _1.addNeighbor(_5)
  _1.addNeighbor(_3)

  _2.addNeighbor(_6)
  _2.addNeighbor(_4)

  _5.addNeighbor(_4)

  _3.addNeighbor(_4)
  _3.addNeighbor(_7)

  const graph = new Graph<number>()
  graph.addExistingGraphNode(_1)
  graph.addExistingGraphNode(_2)
  graph.addExistingGraphNode(_3)
  graph.addExistingGraphNode(_4)
  graph.addExistingGraphNode(_5)
  graph.addExistingGraphNode(_6)
  graph.addExistingGraphNode(_7)



  iterateGraphBreadthFirst<number>(graph.nodes[0])
  console.log('x')
  iterateGraphDepthFirst<number>(graph.nodes[0])
  
}

class GraphNode<T> {
  value: T;
  neighbors: GraphNode<T>[];

  constructor(value: T) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(node: GraphNode<T>) {
    this.neighbors.push(node);
  }
}

class Graph<T> {
  nodes: GraphNode<T>[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: any) {
    const node = new GraphNode(value);
    this.nodes.push(node);
  }

  addExistingGraphNode(node: GraphNode<T>) {
    this.nodes.push(node);
  }

  addEdge(source: GraphNode<T>, destination: GraphNode<T>) {
    source.addNeighbor(destination);
    destination.addNeighbor(source);
  }
}

// Breadth-First: Queue (a list, push to the end, shift to return the first one)
// visits all of the nodes at the same level before moving to the next level
const iterateGraphBreadthFirst = <T>(startNode: GraphNode<T>) => {
  const visited: Set<GraphNode<T>> = new Set();
  const queue: GraphNode<T>[] = [];

  visited.add(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift()!; //
    console.log(currentNode.value);

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }  
}

// Depth-First Search (stack: push to add at the end)
// visits all the nodes of a graph in depth-first order.
const iterateGraphDepthFirst = <T>(startNode: GraphNode<T>) => {
  const visited: Set<GraphNode<T>> = new Set();
  const stack: GraphNode<T>[] = [];

  stack.push(startNode);

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    if (!visited.has(currentNode)) {
      console.log(currentNode.value);
      visited.add(currentNode);

      for (const neighbor of currentNode.neighbors) {
        stack.push(neighbor);
      }
    }
  }
}
