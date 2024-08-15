def calcFatorial(number: int):
    if number >= 2:
        factorial = 1

        for number in range(2, number + 1, 1):
            factorial *= number

        return factorial
    else:
        
        return 1

number = 4
factorial = calcFatorial(number=number)
print(f'The factorial of {number} is: {factorial}')