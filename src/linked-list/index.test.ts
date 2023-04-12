import {beforeEach, describe, expect, test} from '@jest/globals';
import LinkedList from '.';

describe('LinkedList', () => {
  let linkedList: LinkedList<Number>;

  beforeEach(() => {
    linkedList = new LinkedList(1);
  });

  test('push', () => {
    expect(linkedList.getTail()).toBe(1);
    linkedList.push(4);
    expect(linkedList.getTail()).toBe(4);
    expect(linkedList.getLength()).toBe(2);

  });

  test('pop', () => {
    linkedList.push(2);
    expect(linkedList.getTail()).toBe(2);
    expect(linkedList.getLength()).toBe(2);
    let removedNode = linkedList.pop();
    expect(removedNode?.value).toBe(2);
    expect(linkedList.getTail()).toBe(1);
    expect(linkedList.getLength()).toBe(1);
    removedNode = linkedList.pop();
    expect(removedNode?.value).toBe(1);
    expect(linkedList.getHead()).toBeNull();
    expect(linkedList.getTail()).toBeNull();
    expect(linkedList.getLength()).toBe(0);
  });

  test('unshift', () => {
    linkedList.pop();
    linkedList.unshift(2);
    expect(linkedList.getHead()).toBe(2);
    expect(linkedList.getTail()).toBe(2);
    expect(linkedList.getLength()).toBe(1);
    linkedList.unshift(3);
    expect(linkedList.getHead()).toBe(3);
    expect(linkedList.getTail()).toBe(2);
    expect(linkedList.getLength()).toBe(2);
  });

  test('shift', () => {
    expect(linkedList.getHead()).toBe(1);
    linkedList.shift();
    expect(linkedList.getHead()).toBe(null);
    expect(linkedList.getTail()).toBe(null);

    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.shift();
    expect(linkedList.getHead()).toBe(3);
    expect(linkedList.getTail()).toBe(4);
  });

  test('get', () => { 
    expect(linkedList.get(0)?.value).toBe(1);
    linkedList.push(2);
    expect(linkedList.get(1)?.value).toBe(2);
    expect(linkedList.get(5)).toBe(null);
    expect(linkedList.get(-1)).toBe(null);
  });

  test('set', () => { 
    expect(linkedList.get(0)?.value).toBe(1);
    expect(linkedList.set(100, 2)).toBeFalsy();
    expect(linkedList.set(-1, 2)).toBeFalsy();
    expect(linkedList.set(0, 44)).toBeTruthy();
    expect(linkedList.get(0)?.value).toBe(44);
    
    linkedList.push(3);
    linkedList.push(4);
    expect(linkedList.set(2, 10)).toBeTruthy();
    expect(linkedList.get(2)?.value).toBe(10);
  });

});