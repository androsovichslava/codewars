"use strict";

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    let arr = [];
    array.forEach(element => {
        if (element.length > 0 && Array.isArray(element)) {
            element.forEach(elem => {
                console.log(elem);
                arr.push(elem);
            });
        } else arr.push(element);
    });

    return arr;
}

console.log(flattenAndSort([11, [33, 44]]))