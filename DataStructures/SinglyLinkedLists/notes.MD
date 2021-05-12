Insertion -> O(1)
- takes same amount of time to insert item at beginning or end of SLL regardless of list length
- vs. Array where adding item to beginning means you have to shift every item in array so O(n)

Removal ->
- if removing from beginning O(1)
- if removing from end O(n)
    - have to iterate of entire list to find item right before the last item

Searching and Access -> O(n)
- could be the last item so have to check every item in list
- vs. Array which take O(1) time to access item once it has been indexed