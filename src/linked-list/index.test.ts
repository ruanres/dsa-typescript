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
  })

});