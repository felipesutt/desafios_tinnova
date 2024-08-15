def sumOfMultiples(number):
    total_sum = 0

    for current_number in range(1, number + 1):
        if current_number % 3 == 0 or current_number % 5 == 0:
            total_sum += current_number
            
    return total_sum

total_sum = sumOfMultiples(number=10)
print(f'The total sum numbers multiples of 3 or 5 is: {total_sum}')