// Написать объект ladder - объект, который позволяет подниматься вверх и спускаться. Пример работы должен быть таким:

// ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
// ladder.up(); 
// ladder.up();
// ladder.showStep(); // 2
// ladder.down();
// ladder.showStep(); // 1

const ladder = {
    _step: 0,
    stepUp() {
        this._step = this._step + 1;
    },
    stepDown() {
        this._step = this._step - 1;
    },
    showStep() {
        console.log(this._step);
    }
}

ladder.stepUp();
ladder.stepUp();
ladder.stepUp();
ladder.showStep()
ladder.stepDown();
ladder.showStep();