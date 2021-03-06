function recursiveFibonacci(n) {

    if (n < 0) {
        return "negative number not allowed"
    }

    if (n < 2) {
        return n;
    }

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(2)); // 1
console.log(recursiveFibonacci(3)); // 2
console.log(recursiveFibonacci(4)); // 3
console.log(recursiveFibonacci(5)); // 5
console.log(recursiveFibonacci(6)); // 8
console.log(recursiveFibonacci(7)); // 13
console.log(recursiveFibonacci(8)); // 21

// Big-O = O(2^n)