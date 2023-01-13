
"use strict";

function Car(name) {
    this.name = name;
}

const car1 = new Car('BMW');
console.log(car1);
console.log('Сообщение после ошибки');
console.error('Пробная ошибка');
console.log('Сообщение после ошибки');
