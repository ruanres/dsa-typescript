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
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(newNode, this.root);
    }
    return this;
  }

  private insertNode(newNode: TreeNode<T>, parent: TreeNode<T>) {
    if(newNode.value > parent.value) {
      this.insertRight(newNode, parent);
    } else {
      this.insertLeft(newNode, parent);
    }
  }

  private insertRight(newNode: TreeNode<T>, parent: TreeNode<T>) {
    if(parent.isRightEmpty()) {
      parent.right = newNode;
    } else {
      this.insertNode(newNode, parent.right!);
    }
  }

  private insertLeft(newNode: TreeNode<T>, parent: TreeNode<T>) {
    if(parent.isLeftEmpty()) {
      parent.left = newNode;
    } else {
      this.insertNode(newNode, parent.left!);
    }
  }

}