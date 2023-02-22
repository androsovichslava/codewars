let myArray = [[23], [4], [[45], [77]]];


for (var i = 0; i < myArray.length; i++) { // Перебор первого измерения
    for (var j = 0; j < myArray[i].length; j++) { // Перебор второго измерения
        for (var k = 0; k < myArray[i][j].length; k++) { // Перебор третьего измерения
            if (myArray[i][j][k] > 10) { // Проверка условия
                console.log(myArray[i][j][k]); // Вывод чисел больше 10
            }
        }
    }
}