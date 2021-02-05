# Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

# For example,

# [True,  True,  True,  False,
#   True,  True,  True,  True ,
#   True,  False, True,  False,
#   True,  False, False, True ,
#   True,  True,  True,  True ,
#   False, False, True,  True]
# The correct answer would be 17.

# Hint: Don't forget to check for bad values like null/undefined

def count_sheeps(arrayOfSheeps):
    count = sum(filter(lambda sheep: sheep == True, arrayOfSheeps))
    return count
# The usefulness of lambda will be realized when you need a small piece 
# of function that will be run one in a while or just once. Instead of writing the 
# function in global scope or including it as part of your main program you can toss around 
# few lines of code when needed to a variable or another function.