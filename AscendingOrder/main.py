#  Given an array arr and a function fn, return a sorted array sortedArr. 
#  You can assume fn only returns numbers and those numbers determine the sort order of sortedArr.
#  sortedArray must be sorted in ascending order by fn output.

#  You may assume that fn will never duplicate numbers for a given array.



def sort_by(arr, fn):
    return sorted(arr[:], key=fn)

arr = [5, 4, 1, 2, 3]
sorted_arr = sort_by(arr, lambda x: x)
print(sorted_arr)  # Output: [1, 2, 3, 4, 5]
