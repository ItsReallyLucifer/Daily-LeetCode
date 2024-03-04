// Given the head of a singly linked list, reverse the list, and return the reversed list.



// Define a structure to represent each node in the linked list
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

// Define a function to reverse a linked list
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    // Loop through the linked list
    while (current !== null) {
        const nextTemp: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev; // Return reversed linked list
}

// sample linked list with three nodes (1 -> 2 -> 3)
const node1: ListNode = new ListNode(1);
const node2: ListNode = new ListNode(2);
const node3: ListNode = new ListNode(3);
node1.next = node2;
node2.next = node3;

// Call the reverseList function and store the reversed list in a variable
const reversedList: ListNode | null = reverseList(node1);

// Iterate through the reversed list and log the values to the console
let currentNode: ListNode | null = reversedList;
while (currentNode !== null) {
    console.log(currentNode.val); // 3 2 1
    currentNode = currentNode.next;
}
