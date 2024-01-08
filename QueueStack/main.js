// Create a function that returns an object with methods to simulate a stack: 
//push(x) to add elements, pop() to remove and return the top element, top() 
//to return the top element, and empty() to check if the stack is empty. 
//The implementation uses two queues to manage LIFO behavior by transferring elements between queues for stack operations




class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    push(x) {
        this.queue2.push(x); 
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift()); 
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    pop() {
        return this.queue1.shift(); 
    }
    top() {
        return this.queue1[0]; 
    }
    empty() {
        return this.queue1.length === 0; 
    }
}

const obj = new MyStack();
obj.push(1);
obj.push(2);
console.log(obj.top()); // 2
console.log(obj.pop()); // 2
console.log(obj.empty()); // false
