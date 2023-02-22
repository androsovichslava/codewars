function sortArray(array) {
    const oddArr = array.filter(element => element % 2 !== 0).sort((a, b) => a - b);
    array.map((element, i) => {
        if (element % 2 === 0) {
            return oddArr.splice(i, 0, element);
        }
    });
    return oddArr;
}

let arr = [1, 5, 2, 4, 71, 432, 0, 3, 9];

console.log(sortArray(arr));