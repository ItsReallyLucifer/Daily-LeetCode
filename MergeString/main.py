# You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
# starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
# Return the merged string.




def merge_alternately(word1, word2):
    merged = ''
    i = 0
    j = 0

    while i < len(word1) or j < len(word2):
        if i < len(word1):
            merged += word1[i]
            i += 1
        
        if j < len(word2):
            merged += word2[j]
            j += 1

    return merged

word1 = "abc"
word2 = "pqr"
result = merge_alternately(word1, word2)
print(result)  # "apbqcr"
