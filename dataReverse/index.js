function dataReverse(data) {
    // Your code here
    let arr = [];
    for (let i = data.length - 1; i >= 0; i -= 8) {
        for (let j = 0; j < 8; j++) {
            arr.push(data[i + j - 7]);
            console.log(i, j, data[i + j - 7]);
        }

    }

    return arr;
}

console.log(dataReverse([0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1]));