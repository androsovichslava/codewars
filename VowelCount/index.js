function getCount(str) {
    let count = 0;
    let vowels = ['a', 'o', 'i', 'u', 'e'];
    vowels.forEach(elem => {
        count += str.split(elem).length - 1
    })

    return count;
}


console.log(getCount('asdfghjklouytrewqee'));