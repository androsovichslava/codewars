function moveZeros(arr) {
    let res = [];
    let filtered = arr.filter(elem => !(elem === 0));
    let zeroArr = arr.filter(elem => (elem === 0));

    res.push(...filtered, ...zeroArr);
    return res;
}


console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));