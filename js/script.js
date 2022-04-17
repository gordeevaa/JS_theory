"use strict";/*  - говорим скриптовому файлу, что мы работаем с современном режиме,
где уже не работают некоторые неточности, которые были в старых стандартах JavaScript. */

/* 1 ТЕМА: */
let nuber = 5;/*  - первый способ объявления переменной, где наша переменная изменяема */
const leftBorderWidth = 1;/*  - CamelCase — стиль написания составных слов. Здесь значение переменной постоянно, мы его поменять не можем. */

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);/*  - прямых const не бывает. */

console.log(name);/*  - хостинг или всплытие переменных (использование переменной до того, как она была объявлена). */
var name = 'Alena';/*  - третий устаревший вариант объявления перменной. */

/* 2 ТЕМА: "УСЛОВИЯ"*/
if (4 == 9) {
    console.log('Ok!');
}

if (4 == 4) {
    console.log('Ok!');
}

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

if (1) { /* - условие, будет всегда верно */
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

/* 3 ТЕМА: */
/* Синтаксис условий записи при помощи тернарного оператора: */
(num === 50) ? console.log('Ok!') : console.log('Error');
/* Сначала идет условие, которое мы проверяем, т.е. наша переменная равна (num === 50).
Если вдруг это условие верно, то выполняется это действие - console.log('Ok!');
если не верно, то это - console.log('Error'). */

/* Оператор называется тернарным, потому что в его работе участвуют аж 3 аргумента.
Это единственный тернарный оператор, который есть в JS на текущий момент. */


/* 4 ТЕМА: Специальная конструкция switch. Используют для избежания больших ветвлений условий.
Это такая модификация if, которая поддерживает сразу несколько проверок и условий. */
/* Конструкция switch всегда идет на строгое сравнение. */

const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
    console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}


const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
    console.log('Неверно');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}


const num = '50';

switch (num) {
    case '49':
        console.log('Неверно');
        break;
    case '100':
    console.log('Неверно');
        break;
    case '50':
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}