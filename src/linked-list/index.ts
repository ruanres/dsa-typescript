class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor(value: number) {
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
      // if (this.head === null) {
      //     console.log("Head: null");
      // } else {
      //     console.log("Head: " + this.head.value);
      // }
    return this.head ? this.head.value : null;
  }

  getTail() {
      // if (this.tail === null) {
      //     console.log("Tail: null");
      // } else {
      //     console.log("Tail: " + this.tail.value);
      // }
      return this.tail ? this.tail.value : null;
  }

  getLength() {
    // console.log("Length: " + this.length);
    return this.length;
  }

  push(value: number) {
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

}

export default LinkedList;


// function test() {
//     let myLinkedList = new LinkedList(4);
//     myLinkedList.push(19);
    
//     myLinkedList.getHead();
//     myLinkedList.getTail();
//     myLinkedList.getLength();
//     console.log("\nLinked List:");
//     myLinkedList.printList();
// }

// test();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/