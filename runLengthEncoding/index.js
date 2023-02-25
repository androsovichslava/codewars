var runLengthEncoding = function (str) {
    let arr = str.split('');
    let temp = [];
    let prev = arr[0];
    let count = 1;
    for (let i = 1; i < arr.length + 1; i++) {
        if (arr[i] === prev) {
            count++;
        } else {
            temp.push([count, prev]);
            count = 1;
            prev = arr[i];
        }
    }
    return temp // << fix this
}

console.log(runLengthEncoding("faaarr"));