# Given a string s consisting of lowercase English letters, return the first letter to appear twice.
# A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
# s will contain at least one letter that appears twice.




def repeated_character(s):
    seen_chars = set()
    
    for char in s:
        if char in seen_chars:
            return char
        else:
            seen_chars.add(char)

print(repeated_character('abccbaacz'))  # Output: c
