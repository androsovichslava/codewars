function zeroPlentiful(arr) {
    let res = arr.join('').match(/0000/g);
    if (res) return res.length;
    return 0;
}

console.log(zeroPlentiful([]))