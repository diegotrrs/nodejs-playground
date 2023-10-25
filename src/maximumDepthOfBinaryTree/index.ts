class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const calcMaxDepth = (startNode: TreeNode) => {
  type StackEntry = {
    node: TreeNode | null | undefined,
    depth: number,
  }
  const stack: StackEntry[] = [];
  stack.push({node: startNode, depth: 0});
  const visited = new Set<TreeNode>();
  let maxDepth = 0
  while (stack.length > 0) {
    const entry = stack.pop()!;
    const node = entry.node!

    if (!visited.has(node)) {
      visited.add(node);
      if (node.left) {
        stack.push({node: node.left, depth: entry.depth + 1 });
      }

      if (node.right) {
        stack.push({ node: node.right, depth: entry.depth + 1 });
      }
      

      if (!node.left && !node.right) {
        console.log(">> visitnig leaftnode", node.val);
        maxDepth = Math.max(maxDepth, entry.depth);
      } else {
        console.log(">> visitnig node", node.val);
      }
    }
  }
  return maxDepth
};

let maxDepth = 0

function maxDepthRec(root: TreeNode | null): number {
  if(root === null){
      return 0;
  }
  let leftHeight = maxDepthRec(root.left)
  let rightHeight = maxDepthRec(root.right)
  let height = Math.max(leftHeight,rightHeight) + 1;
  return height;
};


const rootNode = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
const node8 = new TreeNode(8);

// Connecting nodes to form a binary tree
rootNode.left = node2;
rootNode.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node6.left = node7;
node7.right = node8

//console.log(calcMaxDepth(rootNode));
console.log(maxDepthRec(rootNode))

/*

9,20,15,7

*/
