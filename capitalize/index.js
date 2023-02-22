//capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

function capitalize(s) {
    let res = [];
    let arr = s.split('').map((letter, index) => index == 0 ? letter.toUpperCase() : index % 2 ? letter.toLowerCase() : letter.toUpperCase());
    res.push(arr.join(''));
    arr = s.split('').map((letter, index) => index == 0 ? letter.toLowerCase() : !(index % 2) ? letter.toLowerCase() : letter.toUpperCase());
    res.push(arr.join(''));

    return res;
};

console.log(capitalize('InDeXiNgLeSsOnS'));