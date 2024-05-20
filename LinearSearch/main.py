# Implement a function that performs a linear search on a list to find-
# the index of a specified item. (-1 if not found) & log the result.



def linear_search(lst, item):
    index = -1
    for i, list_item in enumerate(lst):
        if list_item == item:
            index = i
    return index

print(linear_search([2, 6, 7, 90, 103], 90))  # 3
