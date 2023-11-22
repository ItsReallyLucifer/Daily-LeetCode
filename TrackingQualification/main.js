// There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.
// The company requires each employee to work for at least target hours.
// You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.
// Return the integer denoting the number of employees who worked at least target hours.

// example: Input: hours = [0,1,2,3,4], target = 2
// Output: 3 (employee 0 & 1 did not meet target, while 2, 3, 4 did)


function numberOfEmployeesWhoMetTarget(hours, target) {
    let count = 0;
  
    for (let i = 0; i < hours.length; i++) {
      if (hours[i] >= target) {
        count++;
      }
    }
  
    return count;
  }
  
  const hours = [0, 1, 2, 3, 4];
  const target = 2;
  const result = numberOfEmployeesWhoMetTarget(hours, target);
  console.log(result); // 3
  