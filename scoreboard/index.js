function scoreboard(string) {
    // code here!
    let arrayWords = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let res = string.split(' ');
    let a = [];
    res.map(elem => {
        let index = arrayWords.indexOf(elem);
        if (index > -1) {
            a.push(index);
        }
    })

    return a;
}

console.log(scoreboard("The score is four  four"));