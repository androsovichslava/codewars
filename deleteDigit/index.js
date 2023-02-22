function deleteDigit(n) {
    //coding and coding..
    let arr = n.toString().split('');
    let temp = arr.map((elem, i, arr) => {
        return Number([...arr.slice(0, i), ...arr.slice(i + 1)].join('').trim());
    }).sort((a, b) => a - b).reverse();
    return temp[0];
}

console.log(deleteDigit(303667));