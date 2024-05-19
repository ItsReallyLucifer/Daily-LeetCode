# Given a string s consisting of words and spaces, return the length of the last word in the string.
# A word is a maximal substring consisting of non-space characters only.



def length_of_last_word(s):
    trimmed = s.strip()
    
    length = 0
    for i in range(len(trimmed) - 1, -1, -1):
        if trimmed[i] != ' ':
            length += 1
        else:
            break
    
    return length

input_string = "Hello World"
print(length_of_last_word(input_string))  # 5 ('World' = 5)
