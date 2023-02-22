


function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.map(elem => {
        if (typeof elem === 'string') return elem;
    });
}
console.log(filter_list([12, '444']));