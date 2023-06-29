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

  describe('lookup', () => {
    beforeEach(() => {
      bst
        .insert(10)
        .insert(5)
        .insert(44)
    });

    it('should return the root node', () => {
      expect(bst.lookup(10)).toBe(bst.root);
    });

    it('should return the null when the node in not found', () => {
      expect(bst.lookup(99)).toBeNull();
    });

    it('should find a node on the right', () => {
      expect(bst.lookup(44)).toBe(bst.root?.right);
    });

    it('should find a node on the left', () => {
      expect(bst.lookup(5)).toBe(bst.root?.left);
    });
  });

  describe('getMinimum', () => {
    it('should return null when the tree is empty', () => {
      expect(bst.getMinimum()).toBeNull();
    });

    it('should return the minimum node', () => {
      bst
        .insert(100)
        .insert(5)
        .insert(44)
        .insert(2);
        expect(bst.getMinimum()?.value).toBe(2);
    });
   });

   describe('getMaximum', () => {
    it('should return null when the tree is empty', () => {
      expect(bst.getMaximum()).toBeNull();
    });

    it('should return the minimum node', () => {
      bst
        .insert(33)
        .insert(5)
        .insert(44)
        .insert(50);
        expect(bst.getMaximum()?.value).toBe(50);
    });
   });
});