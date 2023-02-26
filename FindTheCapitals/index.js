var capitals = function (word) {

    // Write your code here
    const arr = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            arr.push(i);
        }
    }

    // word.split('').forEach((elem, index) => {
    //     if (elem === elem.toUpperCase()) {
    //         arr.push(index);
    //     }
    // });
    return arr;
};

console.log(capitals('SlavaAndrosovich'));
