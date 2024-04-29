# Given an integer array nums where the elements are sorted in ascending order,
# convert it to a height-balanced binary search tree.



class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def sortedArrayToBST(nums):
    if not nums:
        return None

    def buildBST(left, right):
        if left > right:
            return None

        mid = (left + right) // 2
        new_node = TreeNode(nums[mid])

        new_node.left = buildBST(left, mid - 1)
        new_node.right = buildBST(mid + 1, right)

        return new_node

    return buildBST(0, len(nums) - 1)

nums = [-10, -3, 0, 5, 9]
root = sortedArrayToBST(nums)

def print_tree(node):
    if node is None:
        return
    print(node.val)
    print_tree(node.left)
    print_tree(node.right)

print_tree(root)
