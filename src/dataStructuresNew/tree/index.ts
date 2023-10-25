class TreeNode<T> {
  value: T;
  children: TreeNode<T>[]

  constructor(value: T){
    this.value = value
    this.children = []
  }

  addChild(child: TreeNode<T>){
    this.children.push(child)
  }
}

class Tree<T> {
  root: TreeNode<T>

  constructor(root: TreeNode<T>){
    this.root = root
  }

  iterateBreadthFirst(){
    const queue = []
    let visited = new Set<TreeNode<T>>();
    
    queue.push(this.root)

    while (queue.length > 0){
      const currentNode = queue.shift()
      if(currentNode){
        if(!visited.has(currentNode)){
          console.log(`Node: ${currentNode.value}`)
          queue.push(...currentNode.children)
          visited.add(currentNode)
        }
      }
    }
  }

  iterateDepthFirst(){
    const stack = []
    const visited = new Set<TreeNode<T>>()

    stack.push(this.root)

    while(stack.length > 0){
      const currentNode = stack.pop()
      if(currentNode){
        if(!visited.has(currentNode)){
          console.log('Node: ' + currentNode.value)
          visited.add(currentNode)
          stack.push(...currentNode.children)
        }
      }      
    }
  }
}



export default () => {  
  let root = new TreeNode<number>(1);

  let tree = new Tree<number>(root); // Create a tree with root value 1

  let child1 = new TreeNode<number>(2);
  let child2 = new TreeNode<number>(3);
  
  tree.root.addChild(child1); // Add child1 as a child of the root
  tree.root.addChild(child2); // Add child2 as a child of the root
  
  let grandChild1 = new TreeNode<number>(4);
  let grandChild2 = new TreeNode<number>(5);
  
  child1.addChild(grandChild1); // Add grandChild1 as a child of child1
  child1.addChild(grandChild2); // Add grandChild2 as a child of child2

  let grandChild3 = new TreeNode<number>(6);
  let grandChild4 = new TreeNode<number>(7);
  
  child2.addChild(grandChild3); // Add grandChild1 as a child of child1
  child2.addChild(grandChild4); // Add grandChild2 as a child of child2

  //tree.iterateBreadthFirst()
  tree.iterateDepthFirst()
}