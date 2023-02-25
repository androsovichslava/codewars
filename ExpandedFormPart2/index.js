function expandedForm(num) {
    // Your code here
    let res;
    let resInt, resFract;
    let int = num.toString().split('.')[0].split('');
    let fract = (num.toString().split('.')[1]) ? num.toString().split('.')[1].split('') : null;
    resInt = int.map((element, i, arr) => {
        return element + '0'.repeat(arr.length - i - 1);
    }).filter(elem => Number(elem) > 0).join(' + ');
    if (fract) {
        resFract = fract.map((element, i) => {
            console.log(element)
            if (Number(element) > 0) {
                return element + '/' + '1' + '0'.repeat(i + 1);
            }
        }).filter(elem => { return elem !== undefined }).join(' + ')
    }
    if (resInt.length > 0) {
        return resInt + ' + ' + resFract;
    } else {
        return resFract;
    }

}

console.log(expandedForm(0.304));