const arrCheck = value => {
    let res = true;
    if (value.length > 0) {
        value.forEach(element => {
            if (!Array.isArray(element)) {
                res = false;
                console.log(res)
                return res;
            }
        });
    }
    return res;
}

console.log(arrCheck([]));