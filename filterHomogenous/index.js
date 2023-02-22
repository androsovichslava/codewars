function filterHomogenous(arrays) {
    // Alea iacta est, code legionary!
    let res = [];

    arrays.forEach(element => {
        let flag = true;
        let first = element[0];
        for (let i = 0; i < element.length; i++) {
            flag = typeof first === typeof element[i];
        }
        if ((flag) && element.length) res.push(element);
    });
    return res;
}

let arr = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]];

console.log(filterHomogenous(arr));