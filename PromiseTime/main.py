# Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
# The time limited function should follow these rules:
# If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
# If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".


import asyncio

def time_limit(fn, t):
    async def wrapper(*args, **kwargs):
        try:
            return await asyncio.wait_for(fn(*args, **kwargs), timeout=t / 1000)
        except asyncio.TimeoutError:
            raise Exception("Time Limit Exceeded")
    
    return wrapper

async def limited(t):
    await asyncio.sleep(t / 1000)

# Wrapping the limited function with a 100ms time limit
limited_with_timeout = time_limit(limited, 100)

# Running the function and catching the timeout exception
try:
    asyncio.run(limited_with_timeout(150))
except Exception as e:
    print(e)  # Output: Time Limit Exceeded
