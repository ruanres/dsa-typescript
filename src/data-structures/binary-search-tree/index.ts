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
    return this.findNode(value, this.root);
  }

  private findNode(value: T, currentNode: TreeNode<T> | null): TreeNode<T> | null {
    if(!currentNode) {
      return null;
    }
    if(value === currentNode.value) {
      return currentNode;
    } else if(value > currentNode.value) {
      return this.findNode(value, currentNode.right);
    } else {
      return this.findNode(value, currentNode.left); 
    }
  }

}