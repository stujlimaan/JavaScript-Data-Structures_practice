class Stack {
    constructor() {
      this.items = {};
      this.head = 0;
    }
  
    push(element) {
      this.items[this.head] = element;
      this.head++;
    }
  
    pop() {
      const item = this.items[this.head - 1];
      delete this.items[this.head - 1];
      this.head--;
      return item;
    }
  
    peek() {
      return this.items[this.head - 1];
    }
  
    size() {
      return this.head;
    }
  
    isEmpty() {
      return this.head === 0;
    }
  
    print() {
      console.log(this.items);
    }
  }

  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6);
  console.log(stack);
  console.log(stack.size());
  console.log(stack.isEmpty());
  console.log(stack.peek());
  console.log(stack.pop());
 