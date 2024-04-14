#  You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:
#  pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
#  Note that ^ denotes the bitwise-xor operation.
#  It can be proven that the answer is unique.


def findArray(pref):
    n = len(pref)
    arr = [pref[0]]

    for i in range(1, n):
        arr.append(pref[i - 1] ^ pref[i])

    return arr

prefArray = [5, 2, 0, 3, 1]
print(findArray(prefArray))  # [5, 7, 2, 3, 2]
