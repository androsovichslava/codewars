var countSheep = function (numberOfSheeps) {
    //your code here
    let resultString = '';
    if (numberOfSheeps > 0) {
        for (let i = 1; i <= numberOfSheeps; i++) {
            resultString += (i + ' sheep...');
        }
    }
    return resultString;
}

console.log(countSheep(12));