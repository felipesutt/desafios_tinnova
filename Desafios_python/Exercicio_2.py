def bubbleSort(number_list: list):
    is_sorted = False

    while not is_sorted:
        is_sorted = True

        for index in range(0 , len(number_list) - 1):
            if number_list[index] > number_list[index + 1]:
                is_sorted = False
                number_list[index], number_list[index + 1] = number_list[index + 1], number_list[index]
    
    return number_list

unordered_list = [5, 3, 2, 4, 7, 1, 0 ,6]
ordered_list = bubbleSort(number_list=unordered_list)
print(f'Ordered list: {ordered_list}')