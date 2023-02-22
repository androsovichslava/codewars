function positiveSum(arr) {
    return arr.reduce((a, c) => a + (c > 0 ? c : 0), 0);
}

console.log(positiveSum([1, 2, 3, 4, -5]))