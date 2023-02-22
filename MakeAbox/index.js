function box(n) {
    let arr = [];
    //your code here
    let FirstLast = '-'.repeat(n);
    arr.push(FirstLast);
    for (let i = 0; i < n - 2; i++) {
        arr.push('-' + ' '.repeat(n - 2) + '-')
    }



    arr.push(FirstLast);
    return arr;
}


console.log(box(3))