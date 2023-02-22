var countSheep = function (num) {
    //your code here
    let res = '';
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            res += (i + ' sheep...');
        }
    }
    return res;
}

console.log(countSheep(1));