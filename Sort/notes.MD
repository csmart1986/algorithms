Bubble Sort
- Worse case and Average Time complexity => O(n**2)
- Best case time complexity => O(n) (w/sorted or almost sorted data b/c has very few swaps)
- Space complexity => O(1) (everything is in-place, not creating new arrays)

Insertion Sort
- Worse case and Average Time complexity => O(n**2)
- Best case time complexity => O(n) (w/sorted or almost sorted data b/c has very few swaps)
- Space complexity => O(1) (everything is in-place, not creating new arrays)
- works well if need data to be continously sorted and new elements are being added

Selection Sort
- Worse case and Average Time complexity => O(n**2)
- Best case time complexity => O(n**2) (w/sorted or almost sorted data still have to go through each time to find lowest item)
- Space complexity => O(1) (everything is in-place, not creating new arrays)

Merge Sort
- Best/Avg/Worst case Time complexity => O(n log n)
    - as n grows, the # of splits grows at rate of log n (where n is length of array)
    - each time we split an array, we have O(n) comparisions when doing the merge
- Space complexity => O(n)

Quick Sort
- Best/Avg time complexity => O(n log n)
- Worst time complexity => O(n**2) (if pivot element is the minimum or maximum element every time)
- Space Complexity = O(log n)

Radix Sort 
- Worse/Best/Avg time complexity => O(nk)
    n = number of #'s in array (length of array)
    k = length of those #s in the array (digit count)
- Space complexity => O(n + k)