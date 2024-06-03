# Create a function that returns an object with methods to simulate a stack: 
# push(x) to add elements, pop() to remove and return the top element, top() 
# to return the top element, and empty() to check if the stack is empty. 
# The implementation uses two queues to manage LIFO behavior by transferring elements between queues for stack operations



from collections import deque

class MyStack:
    def __init__(self):
        self.queue1 = deque()
        self.queue2 = deque()

    def push(self, x):
        self.queue2.append(x)
        while self.queue1:
            self.queue2.append(self.queue1.popleft())
        self.queue1, self.queue2 = self.queue2, self.queue1

    def pop(self):
        return self.queue1.popleft()

    def top(self):
        return self.queue1[0]

    def empty(self):
        return len(self.queue1) == 0

# Usage example
obj = MyStack()
obj.push(1)
obj.push(2)
print(obj.top())    # Output: 2
print(obj.pop())    # Output: 2
print(obj.empty())  # Output: False
