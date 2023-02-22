let arr1 = [1, 100, 50, -51, 1, 1];



function findEvenIndex(arr) {
    function sum(arr, start, end) {
        let sum2 = 0;
        for (let i = start; i < end; i++) {
            sum2 += arr[i];
        }
        return sum2;
    }
    for (let i = 0; i < arr.length; i++) {
        let left = sum(arr, 0, i);
        let right = sum(arr, i + 1, arr.length);
        if (left === right) {
            return i;
        }

    }
    return -1;
}

console.log(findEvenIndex(arr1));