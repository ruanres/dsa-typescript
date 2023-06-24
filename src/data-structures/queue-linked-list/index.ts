import { ListNode } from "../linked-list";

type Node<T> = ListNode<T> | null;

class QueueLinkedList<T> {
  first: Node<T>;
  last: Node<T>;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value: T): void {
    const newNode = new ListNode(value);
    if(this.last) {
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue(): T | null {
    const node = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    if(this.first) {
      this.first = this.first?.next;
      this.length--;
    }
    return node?.value ?? null;
  }

  peek(): T | null {
    return this.first?.value || null;
  }

  isEmpty(): boolean {
    return this.length == 0;
  }
}

export default QueueLinkedList;
