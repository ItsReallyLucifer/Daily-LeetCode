# // Given two strings s and t, determine if they are isomorphic.
# // Two strings s and t are isomorphic if the characters in s can be replaced to get t.
# // All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



def is_isomorphic(s, t):
    if len(s) != len(t):
        return False

    map1 = [0] * 256
    map2 = [0] * 256

    for idx in range(len(s)):
        if map1[ord(s[idx])] != map2[ord(t[idx])]:
            return False
        
        map1[ord(s[idx])] = idx + 1
        map2[ord(t[idx])] = idx + 1

    return True

string1 = "egg"
string2 = "add"

print(is_isomorphic(string1, string2))  # True
