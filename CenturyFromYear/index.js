function centuryFromYear(year) {
    let rest = year % 100;
    let century = Math.floor(year / 100);
    if (rest) {
        century += 1;
    }
    return century;
}

console.log(centuryFromYear(124759));