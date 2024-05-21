# Given head, the head of a linked list, determine if the linked list has a cycle in it.
# There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
# Return true if there is a cycle in the linked list. Otherwise, return false.




class ListNode:
    def __init__(self, val=0):
        self.val = val
        self.next = None

def has_cycle(head):
    fast = head
    while fast and fast.next:
        head = head.next
        fast = fast.next.next
        if head == fast:
            return True
    return False

# Creating nodes
node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node4 = ListNode(4)

# Constructing a linked list with a cycle
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2

# Function to check for a cycle
cycle_present = has_cycle(node1)
print(cycle_present)  # True
