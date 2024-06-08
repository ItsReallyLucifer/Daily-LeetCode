#  Reverse bits of a given 32 bits unsigned integer.
#  Note that in some languages, such as Java, there is no unsigned integer type. 
#  In this case, both input and output will be given as a signed integer type. 
#  They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.



def reverse_bits(n):
    result = 0
    for i in range(32):
        result = (result << 1) | (n & 1)
        n >>= 1
    return result


input_value = 0b00000010100101000001111010011100
print(reverse_bits(input_value))  # Output: 964176192
