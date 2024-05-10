# You own a Goal Parser that can interpret a string command. 
# The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
# The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al".
# The interpreted strings are then concatenated in the original order.

# Given the string command, return the Goal Parser's interpretation of command.




def interpret(command):
    result = ''
    i = 0

    while i < len(command):
        if command[i] == 'G':
            result += 'G'
            i += 1
        elif command[i] == '(' and command[i + 1] == ')':
            result += 'o'
            i += 2
        elif command[i] == '(' and command[i + 1] == 'a' and command[i + 2] == 'l' and command[i + 3] == ')':
            result += 'al'
            i += 4
        else:
            # If none of the conditions are met, increment i to avoid an infinite loop
            i += 1

    return result

command = "G()(al)"
print(interpret(command))  # "Goal"
