class TreeNode<T>{
  constructor(
    public value: T,
    public left: TreeNode<T> | null = null,
    public right: TreeNode<T> | null = null,
  ) {}

  getLeft() {
    return this.left?.value;
  }

  getRight() {
    return this.right?.value;
  }

  isLeftEmpty() {
    return this.left === null;
  }

  isRightEmpty() {
    return this.right === null;
  }
}

export default class BinarySearchTree<T> {
  public root: TreeNode<T> | null;
  
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    let lastVisitedNode: TreeNode<T> | null = null;
    let currentNode = this.root;
    while(currentNode !== null) {
      lastVisitedNode = currentNode;
      if(value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    const newNode = new TreeNode(value);
    if(lastVisitedNode === null) {
      this.root = newNode;
    } else if (value > lastVisitedNode.value) {
      lastVisitedNode.right = newNode;
    } else {
      lastVisitedNode.left = newNode;
    }

    return this;
  }

  lookup(value: T) {
    let currentNode = this.root;
    while(currentNode !== null) {
      if(value === currentNode.value) {
        return currentNode;
      } else if(value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  getMinimum(){
    return this.treeMinimum(this.root);
  }

  getMaximum(){
    return this.treeMaximum(this.root);
  }

  private treeMinimum(node: TreeNode<T> | null) {
    let currentNode = node;
    while(currentNode?.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  private treeMaximum(node: TreeNode<T>| null) {
    let currentNode = node;
    while(currentNode?.right) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

}