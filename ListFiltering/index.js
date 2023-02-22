function filter_list(l) {
    // Return a new array with the strings filtered out

    let temp = [];
    l.map(elem => {
        if (typeof elem != "string") {
            temp.push(elem);
        }
    });
    return temp

}
let arr = [33, 44, 'dddd', 'dd'];

console.log(filter_list(arr))