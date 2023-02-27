// return the magic index
function findMagic(sampleArr) {
    let result = -1;
    sampleArr.forEach((element, i) => {
        if (element === i) result = i;
    });
    return result;

}

console.log(findMagic([-20, -10, 2, 10, 20]))