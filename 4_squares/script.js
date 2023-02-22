let all = document.querySelectorAll('.square');
console.log(all);


all.forEach(elem => {

    elem.addEventListener('click', handlerClick);
});

function handlerClick() {
    if (this.classList.contains('red')) {
        this.classList.remove('red');
        this.classList.add('blue');
    } else {
        this.classList.remove('blue');
        this.classList.add('red');
    }
}