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

});