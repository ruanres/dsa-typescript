
type Node<T> = T | null;

class StackArray<T> {
  array: T[];

  constructor() {
    this.array = [];
  }

  push(value: T): void {
   this.array.push(value);
  }

  pop(): T | null {
    return this.array.pop() ?? null;
  }

  peek(): T | null {
    return this.array[this.array.length - 1] ?? null;
  }

  isEmpty(): boolean {
    return this.array.length == 0;
  }
}

export default StackArray;
