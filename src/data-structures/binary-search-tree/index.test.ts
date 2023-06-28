import BinarySearchTree from './index';

describe('BinarySearchTree', () => { 
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it('should be an empty tree', () => {
    expect(bst.root).toBeNull();
  });

  describe('insert', () => { 
    it('should build a balanced tree', () => {
      bst
        .insert(9)
        .insert(4)
        .insert(20)
        .insert(6)
        .insert(170)
        .insert(15)
        .insert(1);

        expect(bst.root?.value).toBe(9);
        expect(bst.root?.getLeft()).toBe(4);
        expect(bst.root?.getRight()).toBe(20);
        expect(bst.root?.left?.getLeft()).toBe(1);
        expect(bst.root?.left?.getRight()).toBe(6);
        expect(bst.root?.right?.getLeft()).toBe(15);
        expect(bst.root?.right?.getRight()).toBe(170);
    });
  });
});