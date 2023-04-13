import {describe, expect, it} from '@jest/globals';
import Tree from './index';

describe('Tree', () => { 
  it('should create a tree with one node', () => {
    const values = [1];
    const tree = new Tree(values);
    expect(tree.root?.value).toBe(1);
  });

  it('should have the correct children', () => {
    const values = [1, 2, 3, 4, 5];
    const tree = new Tree(values);
    expect(tree.root?.value).toBe(1);
    // root's children
    expect(tree.root?.left?.value).toBe(2);
    expect(tree.root?.right?.value).toBe(3);
    // children of node 2
    expect(tree.root?.left?.left?.value).toBe(4);
    expect(tree.root?.left?.right?.value).toBe(5);
  });

  it('should get the correct tree hight', () => {
    let tree = new Tree([]);
    expect(tree.getHight()).toBe(0);
    tree = new Tree([1]);
    expect(tree.getHight()).toBe(1);
    tree = new Tree([1, 2]);
    expect(tree.getHight()).toBe(2);
    tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(tree.getHight()).toBe(4);
  });
})