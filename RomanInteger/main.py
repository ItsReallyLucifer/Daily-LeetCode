# Create a function converting Roman numerals to integers, considering subtractive notation.



def roman_to_int(s):
    roman_values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    result = 0
    for i in range(len(s)):
        if i > 0 and roman_values[s[i]] > roman_values[s[i - 1]]:
            result += roman_values[s[i]] - 2 * roman_values[s[i - 1]]
        else:
            result += roman_values[s[i]]

    return result


roman_numeral = "XXVII"
print(roman_to_int(roman_numeral))  # Output: 27
