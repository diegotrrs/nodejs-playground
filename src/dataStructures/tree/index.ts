
class TreeNode<T> {
  value: T;
  children: TreeNode<T>[]

  constructor(value: T){
    this.value = value;
    this.children = [];
  }

  addChild(child: TreeNode<T>){
    this.children.push(child);
  }
}

class Tree<T> {
  root: TreeNode<T>

  constructor(rootValue: T){
    this.root = new TreeNode<T>(rootValue)
  }

  iterateDepthFirst(){
    console.log('> iterating breadth first')
    const stack: TreeNode<T>[]= []
    const visited = new Set<TreeNode<T>>()
    stack.push(this.root)

    while(stack.length > 0){
      const currentNode = stack.pop()
      if(currentNode){
        if(!visited.has(currentNode)){
          console.log(` > ${currentNode?.value}`)
          stack.push(...currentNode.children)      
          visited.add(currentNode)
        }
      }      
    }
  }

  iterateBreadthFirst(){
    console.log('> iterating depth first')
    const queue = []
    const visited = new Set<TreeNode<T>>()
    queue.push(this.root)
    
    while(queue.length != 0){
      const currentNode = queue.shift()
      if(currentNode){
        if(!visited.has(currentNode)){
          console.log(` > ${currentNode?.value}`)
          queue.push(...currentNode.children)      
          visited.add(currentNode)
        }
      }
    }
  }
}

export default () => {
  let tree = new Tree<number>(1); // Create a tree with root value 1

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

  tree.iterateBreadthFirst()
  tree.iterateDepthFirst()
}