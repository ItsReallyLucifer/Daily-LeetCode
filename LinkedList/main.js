// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.



function hasCycle (head) {
    let fast = head;
    while (fast && fast.next) {
      head = head.next;
      fast = fast.next.next;
      if (head === fast) return true;
    }
    return false;
  };


  class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Creating nodes
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

// Constructing a linked list with a cycle
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; 

// Function to check for a cycle
function hasCycle(head) {
    let fast = head;
    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        if (head === fast) return true;
    }
    return false;
}

const cyclePresent = hasCycle(node1);
console.log(cyclePresent); // true






