class LWWElement<T> {
  value: T;
  timestamp: number;

  constructor(value: T, timestamp: number) {
    this.value = value;
    this.timestamp = timestamp;
  }
}

class LWWSet<T> {
  elements: Map<T, number> = new Map(); // element -> timestamp

  add(element: T, timestamp: number) {
    const existingTimestamp = this.elements.get(element);
    if (!existingTimestamp || timestamp > existingTimestamp) {
      this.elements.set(element, timestamp);
    }
  }

  remove(element: T, timestamp: number) {
    const existingTimestamp = this.elements.get(element);
    if (existingTimestamp && timestamp > existingTimestamp) {
      this.elements.delete(element);
    }
  }

  has(element: T): boolean {
    return this.elements.has(element);
  }

  getValues(): T[] {
    return Array.from(this.elements.keys());
  }
}

class GraphNode<T> {
  value: T;
  neighbors: LWWSet<GraphNode<T>>;

  constructor(value: T) {
    this.value = value;
    this.neighbors = new LWWSet();
  }

  addNeighbor(node: GraphNode<T>, timestamp: number) {
    this.neighbors.add(node, timestamp);
  }

  removeNeighbor(node: GraphNode<T>, timestamp: number) {
    this.neighbors.remove(node, timestamp);
  }
}

class Graph<T> {
  nodes: LWWSet<GraphNode<T>> = new LWWSet();

  addExistingGraphNode(node: GraphNode<T>, timestamp: number) {
    this.nodes.add(node, timestamp);
  }

  removeNode(node: GraphNode<T>, timestamp: number) {
    this.nodes.remove(node, timestamp);
  }

  addEdge(source: GraphNode<T>, destination: GraphNode<T>, timestamp: number) {
    source.addNeighbor(destination, timestamp);
    destination.addNeighbor(source, timestamp);
  }

  removeEdge(source: GraphNode<T>, destination: GraphNode<T>, timestamp: number) {
    source.removeNeighbor(destination, timestamp);
    destination.removeNeighbor(source, timestamp);
  }
}

// The breadth-first and depth-first iteration functions can stay the same, but you should use LWWSet.getValues() to get the neighbor nodes.

