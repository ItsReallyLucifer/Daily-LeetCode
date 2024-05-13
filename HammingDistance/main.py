# The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
# Given two integers x and y, return the Hamming distance between them.



def hamming_distance(x, y):
    xor_result = x ^ y
    distance = 0

    while xor_result > 0:
        distance += xor_result & 1
        xor_result >>= 1

    return distance

print(hamming_distance(1, 4))  # Output: 2
print(hamming_distance(3, 1))  # Output: 1
