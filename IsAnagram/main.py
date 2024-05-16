# Given two strings s and t, return true if t is an anagram of s, 
# and false otherwise.




def is_anagram(s, t):
    return sorted(s) == sorted(t)

s = 'anagram'
t = 'nagaram'

print(is_anagram(s, t))  # True
print(is_anagram('hello', 'goodbye'))  # False
