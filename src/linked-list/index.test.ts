import {beforeEach, describe, expect, test} from '@jest/globals';
import LinkedList from '.';

describe('LinkedList', () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList(1);
  });

  test('push', () => {
    expect(linkedList.getTail()).toBe(1);
    linkedList.push(4);
    expect(linkedList.getTail()).toBe(4);
  });

  test('pop', () => {
    linkedList.push(2);
    expect(linkedList.getTail()).toBe(2);
    let removedNode = linkedList.pop();
    expect(removedNode?.value).toBe(2);
    expect(linkedList.getTail()).toBe(1);
    removedNode = linkedList.pop();
    expect(removedNode?.value).toBe(1);
    expect(linkedList.getHead()).toBeNull();
    expect(linkedList.getTail()).toBeNull();
  });

});