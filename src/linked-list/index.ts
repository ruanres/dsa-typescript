export class ListNode <T> {
  value: T;
  next: ListNode <T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList <T> {
  head: ListNode <T> | null;
  tail: ListNode <T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new ListNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
        console.log(temp.value);
        temp = temp.next;
    }
  }

  getHead() {
    return this.head ? this.head.value : null;
  }

  getTail() {
      return this.tail ? this.tail.value : null;
  }

  getLength() {
    return this.length;
  }
  push(value: T) {
    const newNode = new ListNode(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if(this.head == null) return null;

    let newTail = null; 
    let poppedNode = this.head;
    while(poppedNode.next != null) {
      newTail = poppedNode;
      poppedNode = poppedNode.next;
    }

    if(newTail == null) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length--;
    return poppedNode;
  }

  unshift(value: T) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if(this.tail == null) {
      this.tail = newNode;
    }
    this.length++;
  }

}

export default LinkedList;
