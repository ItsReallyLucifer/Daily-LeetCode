# Given a string sentence containing only lowercase English letters, 
# return true if sentence is a pangram, or false otherwise.
# A pangram is a sentence where every letter of the English alphabet appears at least once.




def check_if_pangram(sentence):
    return len(set(sentence)) == 26

print(check_if_pangram("thequickbrownfoxjumpsoverthelazydog"))  # True
print(check_if_pangram("hello"))  # False
