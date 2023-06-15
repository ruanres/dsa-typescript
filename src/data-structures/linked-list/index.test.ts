import LinkedList, { ListNode } from './index';

describe('LinkedList', () => {
  let linkedList: LinkedList<Number>;

  beforeEach(() => {
    linkedList = new LinkedList(1);
  });

  describe('push', () => {
    test('should add an item to end of the list', () => { 
      linkedList.push(4);
      expect(linkedList.getTail()).toBe(4);
      expect(linkedList.getLength()).toBe(2);
    });
  });

  describe('pop', () => {
    test('should remove the last node', () => { 
      linkedList.push(2);
      expect(linkedList.getTail()).toBe(2);
      expect(linkedList.getLength()).toBe(2);
      let removedNode = linkedList.pop();
      expect(removedNode?.value).toBe(2);
      expect(linkedList.getTail()).toBe(1);
      expect(linkedList.getLength()).toBe(1);
    });

    test('should the single item in the list', () => { 
      const removedNode = linkedList.pop();
      expect(removedNode?.value).toBe(1);
      expect(linkedList.getHead()).toBeNull();
      expect(linkedList.getTail()).toBeNull();
      expect(linkedList.getLength()).toBe(0);
    });
  });

  describe('unshift', () => {
    test('should add a node to the beginning of the list', () => { 
      linkedList.unshift(2);
      expect(linkedList.getHead()).toBe(2);
      expect(linkedList.getTail()).toBe(1);
      expect(linkedList.getLength()).toBe(2);
    })
  });

  describe('shift', () => {
    test('should remove the single item in the list', () => { 
      expect(linkedList.getHead()).toBe(1);
      linkedList.shift();
      expect(linkedList.getHead()).toBe(null);
      expect(linkedList.getTail()).toBe(null);
    });
    
    test('should remove the first item', () => { 
      linkedList.push(2);
      linkedList.push(3);
      linkedList.shift();
      expect(linkedList.getHead()).toBe(2);
      expect(linkedList.getTail()).toBe(3);
    });
  });

  describe('get', () => { 
    test('should return null for invalid indexes', () => { 
      expect(linkedList.get(5)).toBe(null);
      expect(linkedList.get(-1)).toBe(null);
    });

    test('should get the node value', () => { 
      expect(linkedList.get(0)?.value).toBe(1);
      linkedList.push(2);
      expect(linkedList.get(1)?.value).toBe(2);
    });
  });

  describe('set', () => { 
    test('should return false for invalid indexes', () => { 
      expect(linkedList.set(100, 2)).toBeFalsy();
      expect(linkedList.set(-1, 2)).toBeFalsy();
    });

    test('should change the head', () => { 
      expect(linkedList.set(0, 44)).toBeTruthy();
      expect(linkedList.getHead()).toBe(44);
    });

    test('should change a node in the middle', () => { 
      linkedList.push(3);
      linkedList.push(4);
      expect(linkedList.set(2, 10)).toBeTruthy();
      expect(linkedList.get(2)?.value).toBe(10);
    });
  });

  describe('insert', () => { 
    test('should return false for invalid indexes', () => { 
      expect(linkedList.insert(100, 2)).toBeFalsy();
      expect(linkedList.insert(-1, 2)).toBeFalsy();
    });

    test('should change the head', () => { 
      expect(linkedList.insert(0, 44)).toBeTruthy();
      expect(linkedList.getHead()).toBe(44);
      expect(linkedList.get(1)?.value).toBe(1);
    });

    test('should change the tail', () => {
      linkedList.push(10)
      expect(linkedList.insert(1, 5)).toBeTruthy();
      expect(linkedList.getTail()).toBe(5);
    });

    test('should change a node in the middle', () => { 
      linkedList.push(20);
      linkedList.push(30);
      expect(linkedList.insert(1, 12)).toBeTruthy();
      expect(linkedList.get(0)?.value).toBe(1);
      expect(linkedList.get(1)?.value).toBe(12);
      expect(linkedList.get(2)?.value).toBe(20);
      expect(linkedList.get(3)?.value).toBe(30);
    });
  });

  describe('remove', () => { 
    test('should return false for invalid indexes', () => { 
      expect(linkedList.remove(100)).toBeFalsy();
      expect(linkedList.remove(-1)).toBeFalsy();
    });

    test('should remove the head', () => { 
      expect(linkedList.remove(0)).toEqual(new ListNode(1));
      expect(linkedList.getHead()).toBe(null);
    });

    test('should remove the tail', () => {
      linkedList.push(2);
      expect(linkedList.remove(1)).toEqual(new ListNode(2));
      expect(linkedList.getTail()).toBe(1);
    });

    test('should remove the node in the middle', () => {
      linkedList.push(2);
      linkedList.push(3);
      expect(linkedList.remove(1)).toEqual(new ListNode(2));
      expect(linkedList.getTail()).toBe(3);
    });
  });

  describe('reverse', () => {
    test('should reverse a list with one node', () => { 
      expect(linkedList.reverse()).toEqual(new LinkedList(1));
    });

    test('should reverse the whole list', () => { 
      linkedList.push(2);
      linkedList.push(3);
      const reversed = (new LinkedList(3)).push(2).push(1);
      expect(linkedList.reverse()).toEqual(reversed);
    });
  });
});