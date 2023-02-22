function rowWeights(array) {
    //your code here
    let sum1 = 0;
    let sum2 = 0;
    let flag = true;
    array.forEach(element => {
        console.log(flag);
        if (flag) {
            sum1 += element;
            flag = !flag;
        } else {
            sum2 += element;
            flag = !flag;

        }
    });
    return [sum1, sum2];
}

console.log(rowWeights([10, 20, 30, 50, 60]));