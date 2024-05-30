# Given an integer 'x', return true if x is a palindrome and false otherwise.



def is_palindrome(x):
    str_x = str(x)
    reversed_str = str_x[::-1]
    
    if reversed_str == str_x:
        return True
    else:
        return False

print(is_palindrome(121))  # True
print(is_palindrome(567))  # False
