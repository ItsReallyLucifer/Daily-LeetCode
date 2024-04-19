#  Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
#  Given a balanced string s, split it into some number of substrings such that:
#  Each substring is balanced.
#  Return the maximum number of balanced strings you can obtain.


def balancedStringSplit(s):
    count = 0
    balanced_count = 0

    for char in s:
        if char == 'L':
            count += 1
        elif char == 'R':
            count -= 1

        if count == 0:
            balanced_count += 1

    return balanced_count

print(balancedStringSplit('RLRRLLRLRL'))  # Output: 4
