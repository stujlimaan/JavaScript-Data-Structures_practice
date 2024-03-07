class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[0];
      }
      return null;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }
  }
  
  const queue = new Queue();
  console.log(queue.isEmpty());
  queue.enqueue(60);
  queue.enqueue(200);
  queue.enqueue(300);
  console.log(queue.size());
  queue.print();
  console.log(queue.dequeue());
  console.log(queue.peek());
  queue.print();