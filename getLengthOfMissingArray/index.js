function getLengthOfMissingArray(arrayOfArrays) {
    let arr = arrayOfArrays.map(elem => elem[0] === null ? 0 : elem.length).sort();
    console.log(arr)
    let res = 0;
    let start = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let def = arr[i];
        console.log('def ', def, ' start', start, ' i', i)
        if (def !== start + 1) res = arr[i] - 1;
        start = def;
    }

    return res;
}

console.log(getLengthOfMissingArray([[], [1, 2], [4, 5, 1, 1], [1, 4, 4, 4, 4, 4], [5, 6, 7, 8, 9], [3, 3, 3], [1, 1, 1, 1, 1, 1, 1, 1]]));