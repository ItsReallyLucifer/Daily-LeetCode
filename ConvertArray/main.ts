// Given an integer array nums where the elements are sorted in ascending order,
// convert it to a height-balanced binary search tree.



class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
        return null;
    }

    const buildBST = (left: number, right: number): TreeNode | null => {
        if (left > right) {
            return null;
        }

        const mid = Math.floor((left + right) / 2);
        const newNode = new TreeNode(nums[mid]);

        newNode.left = buildBST(left, mid - 1);
        newNode.right = buildBST(mid + 1, right);

        return newNode;
    };

    return buildBST(0, nums.length - 1);
}

const nums: number[] = [-10, -3, 0, 5, 9];
const root: TreeNode | null = sortedArrayToBST(nums);
console.log(root);
