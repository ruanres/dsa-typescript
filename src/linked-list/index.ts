type NextNode<T> = ListNode <T> | null;
export class ListNode <T> {
  value: T;
  next: NextNode<T>;

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
    if(this.head === null) return null;

    let newTail = this.head; 
    let poppedNode = this.head;
    while(poppedNode.next != null) {
      newTail = poppedNode;
      poppedNode = poppedNode.next;
    }

    if(this.tail === this.head) {
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
    if(this.tail === null) {
      this.tail = newNode;
    }
    this.length++;
  }

  shift() {
    if (this.head === null) return null;

    const node = this.head;
    this.head = this.head.next;
    node.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return node;
  }

  get(index: number) {
    if(index < 0 || index >= this.length) return null;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      if (temp) {
        temp = temp.next;
      }
    }
    return temp;
  }

  set(index: number, value: T) {
    let temp = this.get(index);
    if(temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: T) {
    if(index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length - 1) {
      this.push(value);
      return true;
    }

    const temp = this.get(index - 1);
    if (temp) {
      const newNode = new ListNode(value);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
      return true;
    }
    return false;
  }

  remove(index: number) {
    if(index < 0 || index > this.length) return false;

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const temp = this.get(index - 1);
    if (temp) {
      const removedNode = temp.next;
      if (removedNode?.next) {
        temp.next = removedNode.next;
        removedNode.next = null;
        this.length--;
        return removedNode;
      }
    }

    return null;
  }

}

export default LinkedList;
