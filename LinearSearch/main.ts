// Implement a function that performs a linear search on a list to find-
// the index of a specified item. (-1 if not found) & log the result.





function linearSearch(list: any[], item: any): number {
    let index: number = -1;
    list.forEach((listItem: any, i: number) => {
        if (listItem === item) {
            index = i;
        }
    });
    return index;
}

console.log(linearSearch([2, 6, 7, 90, 103], 90)); // 3
