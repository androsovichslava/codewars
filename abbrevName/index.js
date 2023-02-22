function abbrevName(name) {

    // code away
    return name.split(' ').map(elem => elem[0].toUpperCase()).join('.');

}

abbrevName('slava androsovich');