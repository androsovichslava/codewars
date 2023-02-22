function insertDash(num) {
    //code me
    let res = [];

    let arr = num.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) && (arr[i + 1] % 2)) {
            res.push(arr[i]);
            res.push('-');
        } else {
            res.push(arr[i]);
        }
    };

    return res.join('');
}



console.log(insertDash(1234579));