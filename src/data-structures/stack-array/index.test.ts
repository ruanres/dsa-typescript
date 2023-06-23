import StackArray from ".";

describe('Stack - Array', () => { 
  let stack: StackArray<number>;

  beforeEach(() => {
    stack = new StackArray();
  });

  describe('push', () => { 
    it('should add a new value when the stack is empty', () => {
      stack.push(1);
      expect(stack.array[stack.array.length - 1]).toBe(1);
    });
  
    it('should add a new value and update the top value', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.array[stack.array.length - 1]).toBe(3);
    });
   });

  describe('peek', () => { 
   it('should return null when the stack is empty', () => {
      expect(stack.peek()).toBeNull();
   }); 

   it('should return the last added value', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
 });

  })

  describe('pop', () => { 
    it('should return null when the stack is empty', () => {
      expect(stack.isEmpty()).toBeTruthy();
      expect(stack.pop()).toBeNull();
    });

    it('should leave the stack empty after removing the last node', () => {
      stack.push(1);
      expect(stack.pop()).toBe(1);
      expect(stack.isEmpty()).toBeTruthy();
    });

    it('should update the top node', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
      expect(stack.peek()).toBe(2);
    });
  });

 })