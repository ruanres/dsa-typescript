class TreeNode {
  constructor(
    public value: number,
    public left: TreeNode | null,
    public right: TreeNode | null,
  ) {}

  isLeftEmpty() {
    return this.left === null;
  }

  toString() {
    return this.value.toString();
  }

}

export default class Tree {
  public root: TreeNode | null = null;

  constructor(values: Array<number>) {
    this.fillTree(values);
  }

  private fillTree(values: Array<number>) {
    const nodes: TreeNode[] = [];
    this.root = new TreeNode(values[0], null, null);
    nodes.push(this.root);

    for (let i = 1; i < values.length; i++) {
      const newNode = new TreeNode(values[i], null, null);
      const parentIndex = this.getParentIndex(i);
      const parentNode = nodes[parentIndex];
      if (parentNode.isLeftEmpty()) {
        parentNode.left = newNode;
      } else {
        parentNode.right = newNode;
      }
      nodes.push(newNode);
    }
  }

  private getParentIndex(nodeIndex: number): number {
    const isEven = nodeIndex % 2 == 0;
    return isEven ? (nodeIndex / 2) - 1 : (nodeIndex - 1) / 2;
  }

}