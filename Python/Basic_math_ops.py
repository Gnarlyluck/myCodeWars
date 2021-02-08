import operator
def basic_op(op, value1, value2):
    ops = { 
        '+': operator.add(value1, value2), 
        "-": operator.sub(value1, value2), 
        "*": operator.mul(value1, value2), 
        "/": operator.truediv(value1, value2) 
        }
    if op == '+':
        return (ops["+"])
    elif op == '-':
        return (ops["-"])
    elif op == '*':
        return (ops["*"])
    elif op == '/':
        return (ops["/"])