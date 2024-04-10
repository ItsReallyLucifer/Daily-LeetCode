#  You are given a 0-indexed, strictly increasing integer array nums 
#  and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

#  i < j < k,
#  nums[j] - nums[i] == diff, and
#  nums[k] - nums[j] == diff.
#  Return the number of unique arithmetic triplets.



def arithmetic_triplets(nums, diff):
    num_counts = {}
    triplet_counts = {}
    count = 0

    for num in nums:
        prev_num = num - diff
        prev_count = num_counts.get(prev_num, 0)
        count += triplet_counts.get(prev_num, 0)
        num_counts[num] = num_counts.get(num, 0) + 1
        triplet_counts[num] = triplet_counts.get(num, 0) + prev_count

    return count
