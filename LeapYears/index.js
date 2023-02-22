function leapYears(year) {
    if (!(year % 4) || !(year % 400)) {
        console.log('делится на 4 или 400');
        if (!(year % 100)) {
            console.log('делится на 100')
            return false
        }

        return true
    } else {
        return false;
    }
}

console.log(leapYears(2000));