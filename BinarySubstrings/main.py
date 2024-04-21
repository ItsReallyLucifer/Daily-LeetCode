#  Given a binary string s, calculate and return the number of non-empty substrings where 
#  the consecutive 0's and 1's are grouped together, and the count of 0's and 1's is equal. Count repeated substrings accordingly.




def countBinarySubstrings(s):
    count = 0
    prevLength = 0
    currentLength = 1

    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            currentLength += 1
        else:
            count += min(prevLength, currentLength)
            prevLength = currentLength
            currentLength = 1

    count += min(prevLength, currentLength)
    return count

inputString = "00110011"
print(countBinarySubstrings(inputString))  # Output: 6
