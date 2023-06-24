import QueueLinkedList from ".";

describe('Queue - LinkedList', () => { 
  let queue: QueueLinkedList<number>;

  beforeEach(() => {
    queue = new QueueLinkedList();
  });

  describe('enqueue', () => { 
    it('should add a new value when the queue is empty', () => {
      queue.enqueue(1);
      expect(queue.first?.value).toBe(1);
      expect(queue.last?.value).toBe(1);
    });
  
    it('should add a new value and update the first value', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.first?.value).toBe(1);
      expect(queue.last?.value).toBe(3);
    });
   });

  describe('peek', () => { 
   it('should return null when the queue is empty', () => {
      expect(queue.peek()).toBeNull();
   }); 

   it('should return the last added value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
 });

  })

  describe('dequeue', () => { 
    it('should return null when the queue is empty', () => {
      expect(queue.isEmpty()).toBeTruthy();
      expect(queue.dequeue()).toBeNull();
    });

    it('should leave the queue empty after removing the last node', () => {
      queue.enqueue(1);
      expect(queue.dequeue()).toBe(1);
      expect(queue.isEmpty()).toBeTruthy();
    });

    it('should update the first node', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toBe(1);
      expect(queue.peek()).toBe(2);
    });
  });

 })