# retunr largest number by inserting 5 
# Example test:   268
# OK

# Example test:   670
# OK

# Example test:   0
# OK

# Example test:   -999
# Output (stderr):
# Traceback (most recent call last):
#   File "exec.py", line 123, in <module>
#     main()
#   File "exec.py", line 85, in main
#     result = solution( N )
#   File "/tmp/solution.py", line 15, in solution
#     return int(num[:i] + '5' + num[i:])
# ValueError: invalid literal for int() with base 10: '5-999'
# RUNTIME ERROR (tested program terminated with exit code 1)

def solution(N):
    # write your code in Python 3.6
    if N >= 0:
        num = str(N)
        for i in range(len(num)):
            if '5' > num[i]:
                return int(num[:i] + '5' + num[i:])
    elif N <= 0:
        num = str(N)
        for i in range(len(num)):
            if '5' > num[i]:
                return int(num[:i] + '5' + num[i:])
   
