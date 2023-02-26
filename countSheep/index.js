var countSheep = function (numberSheeps) {
    //your code here
    let resultString = '';
    if (numberSheeps > 0) {
        for (let i = 1; i <= numberSheeps; i++) {
            resultString += (i + ' sheep...');
        }
    }
    return resultString;
}

console.log(countSheep(12));