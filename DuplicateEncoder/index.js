function duplicateEncode(word) {
    // ...
    let str = word.toUpperCase();
    let arr = str.split('');
    console.log(str)
    console.log(arr)
    return arr.map(elem => {
        let first = str.indexOf(elem);
        let second = -1;
        if (first >= 0) {
            second = str.indexOf(elem, first + 1);
        }
        console.log('first = ', first, 'second = ', second);
        if (first >= 0 && second >= 0) {
            return ')';
        } else {
            return '(';
        }

    }).join('');

}

console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));
console.log(duplicateEncode('recede'));