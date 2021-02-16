# Convert number to reversed array of digits
# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

# Example:
# 348597 => [7,9,5,8,4,3]

def digitize(n):
    str_n = [int(i) for i in str(n)]
    return str_n[::-1]