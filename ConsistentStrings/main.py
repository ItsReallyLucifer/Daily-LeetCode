# You are given a string allowed consisting of distinct characters and an array of strings words.
# A string is consistent if all characters in the string appear in the string allowed.

# Return the number of consistent strings in the array words.


def countConsistentStrings(allowed, words):
    allowed_set = set(allowed)
    count = 0
    
    for word in words:
        consistent = True
        for char in word:
            if char not in allowed_set:
                consistent = False
                break
        if consistent:
            count += 1
    
    return count

allowed = "ab"
words = ["ad", "bd", "aaab", "baa", "badab"]

print(countConsistentStrings(allowed, words))  # Output: 2
