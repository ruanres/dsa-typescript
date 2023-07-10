export class Graph {
  numberOfNodes: number;
  adjacentList: Record<number, number[]>;

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = [];
  }

  addVertex(node: number) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1: number, node2: number) {
    if(this.hasNode(node1) && this.hasNode(node2)) {
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
    }
  }

  private hasNode(node: number) {
    return this.adjacentList[node] !== undefined;
  }
}