# You are given a 0-indexed array of strings words and a character x.
# Return an array of indices representing the words that contain the character x.
# Note that the returned array may be in any order.



def find_words_containing(words, x):
    indices = []
    
    for i in range(len(words)):
        if x in words[i]:
            indices.append(i)
    
    return indices

words = ["leet", "code"]
x = "e"

print(find_words_containing(words, x))  # Output: [0, 1]