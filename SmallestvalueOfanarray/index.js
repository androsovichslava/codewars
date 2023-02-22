function min(arr, toReturn) {
    // TODO
    let index = 0;
    let min = arr[index];
    for (let i = 1; i < arr.length; i++) {

        if (min > arr[i]) {
            min = arr[i];
            index = i;
        }
    }
    if (toReturn == 'value') {
        return min;
    } else {
        return index;
    }
}

console.log(min([55, 66, 1, 2, 3, 4, 5], 'value'));