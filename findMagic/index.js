// return the magic index
function findMagic(arr) {
    let res = -1;
    arr.forEach((element, i) => {
        console.log(element, i)
        if (element === i) res = i;
    });
    return res;

}

console.log(findMagic([-20, -10, 2, 10, 20]))