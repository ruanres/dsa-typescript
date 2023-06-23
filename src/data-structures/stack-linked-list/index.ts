import { ListNode } from "../linked-list";

type Node<T> = ListNode<T> | null;

class StackLinkedList<T> {
  top: Node<T>;
  bottom: Node<T>;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value: T): void {
    const node = new ListNode<T>(value);
    if (!this.length) {
      this.bottom = node;
      this.top = node;
    } else if(this.top) {
      const prevTop = this.top;
      this.top = node;
      this.top.next = prevTop;
    }
    this.length++;
  }

  pop(): T | null {
    const node = this.top;
    if(this.length == 1) {
      this.bottom = null;
      this.top = null;
      this.length--;
    } else if(this.top) {
      this.top = this.top.next;
      this.length--;
      return node!.value;
    }

    return node?.value || null;
  }

  peek(): T | null {
    return this.top?.value || null;
  }

  isEmpty(): boolean {
    return this.length == 0;
  }
}

export default StackLinkedList;
