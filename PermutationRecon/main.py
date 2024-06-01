# A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

# s[i] == 'I' if perm[i] < perm[i + 1], and
# s[i] == 'D' if perm[i] > perm[i + 1].
# Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.




def di_string_match(s):
    n = len(s)
    low, high = 0, n
    result = []

    for i in range(n + 1):
        if i < n and s[i] == 'I':
            result.append(low)
            low += 1
        else:
            result.append(high)
            high -= 1

    return result

# Example usage
s = "IDID"
print(di_string_match(s))  # Output: [0, 4, 1, 3, 2]
