function findShort(s) {
    const min = s.reduce((max, elem) => (max.length < elem.length ? max : elem));
    return min.length;
}

let arr = ['slava', 'ssdd', 'sssssssssssssssssssssssssssssssssssssssssssssssssssss', 'rrrrrrrrrrrrrrrrrrrrrrr'];

console.log(findShort(arr))