function linearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;

}

const arr = [-4, 6, 3, 2, 9, 7, 2];

console.log(linearSearch(arr, 2));  // 3
console.log(linearSearch(arr, 9));  // 4
console.log(linearSearch(arr, -4)); // 0
console.log(linearSearch(arr, 20)); // -1

// Big-O = O(n)