# You are given a string 's' and an integer array 'indices' of the same length. 
# The string 's' will be shuffled such that the character at the i(th) position 
# moves to indices[i] in the shuffled string.
# Return the shuffled string.

# Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
# Output: "leetcode"




def restore_string(s, indices):
    shuffled = [''] * len(indices)
    for i in range(len(indices)):
        shuffled[indices[i]] = s[i]
    return ''.join(shuffled)


s = "codeleet"
indices = [4, 5, 6, 7, 0, 2, 1, 3]
print(restore_string(s, indices))  # Output: "leetcode"
