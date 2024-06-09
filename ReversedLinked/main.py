# Define a class to represent each node in the linked list
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Define a function to reverse a linked list
def reverse_list(head):
    prev = None
    current = head

    # Loop through the linked list
    while current is not None:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp

    return prev  # Return reversed linked list

# Sample linked list with three nodes (1 -> 2 -> 3)
node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node1.next = node2
node2.next = node3

# Call the reverse_list function and store the reversed list in a variable
reversed_list = reverse_list(node1)

# Iterate through the reversed list and print the values
current_node = reversed_list
while current_node is not None:
    print(current_node.val)  # Output: 3 2 1
    current_node = current_node.next
