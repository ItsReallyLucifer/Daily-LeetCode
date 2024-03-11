// Simulate building the target array with stack operations.
// Given a target array and an integer n, use an empty stack to simulate building the target array using the following rules:

// 1) If the current number in the stack is less than the target number, push and immediately pop to maintain stack size.
// 2) Continue this process until the current number matches the target.
// 3) Repeat for each element in the target array.
// 4) Return the stack operations needed.
// 5) If multiple valid answers exist, return any of them.


function buildArray(target: number[], n: number): string[] {
    const operations: string[] = [];
    let currentNumber: number = 1;
  
    for (const num of target) {
      while (currentNumber < num) {
        operations.push("Push");
        operations.push("Pop");
        currentNumber++;
      }
      operations.push("Push");
      currentNumber++;
    }
  
    return operations;
}

const targetArray: number[] = [1, 3];
const nValue: number = 3;
console.log(buildArray(targetArray, nValue)); // [ 'Push', 'Push', 'Pop', 'Push' ]
