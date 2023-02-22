var capitals = function (word) {

    // Write your code here
    let arr = [];
    word.split('').map((elem, index) => {
        if (elem == elem.toUpperCase()) {
            console.log(elem)
            arr.push(index);
        }
    });
    return arr;
};

console.log(capitals('SlavaAndrosovich'));
