String.prototype.toJadenCase = function () {
    return this.split(' ').map(elem => elem.slice(0, 1).toUpperCase() + elem.slice(1)).join(' ');
}

console.log('sss cc ff'.toJadenCase());