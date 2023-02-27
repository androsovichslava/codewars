function filterHomogenous(nonHomoArray) {
    let homoArray = [];
    for (const element of nonHomoArray) {
        let flag = true;
        let first = element[0];
        for (let i = 1; i < element.length; i++) {
            flag = typeof first === typeof element[i];
            if (!flag) break;
        }
        if ((flag) && element.length) {
            homoArray.push(element);
        }
    };
    return homoArray;
}

let arr = [[1, 5, 4], ['a', 3, 5], [1, 'a', 1, 'a', 1], ['b'], [], ['1', 2, 3]];

console.log(filterHomogenous(arr));
