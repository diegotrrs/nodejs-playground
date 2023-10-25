

class TreeNode<T> {
  value: T;
  right: TreeNode<T> | null = null
  left: TreeNode<T> | null = null

  constructor(value: T){
    this.value = value
  }

  setLeft(node: TreeNode<T>) {
    this.left = node;
}

  setRight(node: TreeNode<T>) {
      this.right = node;
  }
}

class Tree<T> {
  root: TreeNode<T>

  constructor(rootValue: T){
    this.root = new TreeNode(rootValue)
  }

  isBinarySearchTree<T>(node: TreeNode<T> | null, min: T | null = null, max: T | null = null, side: string = "root"): boolean {
    console.log(`side: ${side} >> node ${node?.value}, min ${min}, max ${max}`)
    if (node === null) return true;

    if (min && node.value <= min) return false; 

    if (max && node.value >= max) return false;

    return this.isBinarySearchTree(node.left, min, node.value, "left") && this.isBinarySearchTree(node.right, node.value, max, "right");
}
}

export default () => {

  /*
      10
    5    15
  3  7  13 17

  */
  const tree = new Tree<number>(10);

  const _5 = new TreeNode(5)
  //const _15 = new TreeNode(15)

  const _3 = new TreeNode(3)
  const _7 = new TreeNode(7) 

  const _13 = new TreeNode(13)
  const _17 = new TreeNode(17) 

  const _12 = new TreeNode(12) 

  tree.root.setLeft(_5)
  //tree.root.setRight(_15)

  _5.setLeft(_3)
  _5.setRight(_7)

  //_15.setLeft(_13)
  //_15.setRight(_17)

  //_15.setRight(_12)
  
  console.log(tree.isBinarySearchTree(tree.root))
}