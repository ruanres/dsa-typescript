import { Graph } from "."

describe('graph', () => { 
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should add a new vertex', () => {
    graph.addVertex(1);
    expect(graph.adjacentList[1]).toEqual([]);
    expect(graph.numberOfNodes).toBe(1);
  });

  it('addEdge', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addEdge(1, 2);
    expect(graph.adjacentList[1]).toEqual([2]);
    expect(graph.adjacentList[2]).toEqual([1]);
  });

 })