# Introduction
# The first century spans from the year 1 up to and including the year 100, 
# The second - from the year 101 up to and including the year 200, etc.

# Task :
# Given a year, return the century it is in.

# Input , Output Examples ::
# centuryFromYear(1705)  returns (18)
# centuryFromYear(1900)  returns (19)
# centuryFromYear(1601)  returns (17)
# centuryFromYear(2000)  returns (20)
# Hope you enjoy it .. Awaiting for Best Practice Codes


# This was overly complicated on my part and didn't fully work
import math
def century(year):
    if year <= 1000 and year >= 100:
        strnum = int(str(year)[:1])+1
        return strnum
    elif year <= 99:
        return 1
    elif year >= 1900 and year <= 2000:
        troublesome = int(str(year)[:2])
        return troublesome
    elif year > 1000 and year <= 9999: 
        erthing = int(str(year)[:2])+1
        return erthing
    elif year >= 10000 and year <= 100000:
        big = math.ceil(int(str(year)[:3]))+1
        return big
    else: 
        bigboi = math.ceil(int(str(year)[:4]))+1
        return bigboi


# this solution is soooooo much cleaner

def cent(year):
    return (year + 99) // 100