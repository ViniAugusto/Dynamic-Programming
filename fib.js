
//brute force
const fib = (n) => {
    if (n <= 2) return 1;

    return fib(n-1) + fib(n-2);
}

// console.log(fib(7));
// console.log(fib(3));
// console.log(fib(50));



//memoized
const fibMemo = (n, memo = {}) => {
    console.log(memo);
    if (n in memo) return memo[n]
    if (n <= 2) return 1;
    

    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
}

console.log(fibMemo(7));
console.log(fibMemo(3));
console.log(fibMemo(50));
