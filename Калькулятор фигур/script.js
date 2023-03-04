'use strict'
let squareSide = document.querySelector('.square-side');
let squareCalc = document.querySelector('.square_calc');
let squareAnswer = document.querySelector('.square-answer');
let square = document.querySelector('.square')

let recSideA = document.querySelector('.rec-side-a');
let recSideB = document.querySelector('.rec-side-b');
let recCalc = document.querySelector('.rec_calc');
let recAnswer = document.querySelector('.rec-answer');
let rectangle = document.querySelector('.rectangle');

let radius = document.querySelector('.radius');
let circleCalc = document.querySelector('.circle_calc');
let circleAnswer = document.querySelector('.circle-answer');
let circle = document.querySelector('.circle');

let triSideA = document.querySelector('.tri-side-a');
let triSideB = document.querySelector('.tri-side-b');
let triSideC = document.querySelector('.tri-side-c');
let triCalc = document.querySelector('.tri_calc');
let triAnswer = document.querySelector('.tri-answer');
let triangle = document.querySelector('.triangle');



squareCalc.addEventListener('click', function (){
    if (squareSide.value <= 0) {
        squareAnswer.textContent = 'Введите корректные значения выше!';
        squareAnswer.style.color = 'red';
    } else {
        square.classList.add('shuffle');
        squareAnswer.style.color = 'black';
        squareAnswer.textContent = `Периметр квадрата: ${squareSide.value ** 2}` + '\r\n' +  `Площадь квадрата: ${squareSide.value * 4}`;
        setTimeout(function(){square.classList.remove('shuffle')}, 1000);

    }
});


recCalc.addEventListener('click', function (){
    if (recSideA.value <= 0 || recSideB.value <= 0) {
        recAnswer.textContent = 'Введите корректные значения выше!';
        recAnswer.style.color = 'red';
    } else {
        rectangle.classList.add('shuffle');
        recAnswer.style.color = 'black';
        recAnswer.textContent = `Периметр прямоугольника: ${(+recSideA.value + +recSideB.value) * 2}` + '\r\n' +  `Площадь прямоугольника: ${recSideA.value * recSideB.value}`;
        setTimeout(function(){rectangle.classList.remove('shuffle')}, 1000);
    }
});

circleCalc.addEventListener('click', function (){
    if (radius.value <= 0) {
        circleAnswer.textContent = 'Введите корректные значения выше!';
        circleAnswer.style.color = 'red';
    } else {
        circle.classList.add('shuffle');
        circleAnswer.style.color = 'black';
        circleAnswer.textContent = `Длина окружности: ${2 * radius.value * Math.PI}` + '\r\n' +  `Площадь круга: ${2 ** radius.value * Math.PI}`;
        setTimeout(function(){circle.classList.remove('shuffle')}, 1000);
    }
});

triCalc.addEventListener('click', function (){
    if (triSideA.value <= 0 || triSideB.value <= 0 || triSideC.value <= 0) {
        triAnswer.textContent = 'Введите корректные значения выше!';
        triAnswer.style.color = 'red';
    } else {
        triangle.classList.add('shuffle');
        triAnswer.style.color = 'black';
        let a = triSideA.value, b = triSideB.value, c = triSideC.value;
        let p = (+a + +b + +c) / 2;
        console.log(p);
        triAnswer.textContent = `Площадь треугольника: ${Math.sqrt(p * (p - a) * (p - b) * (p - c))}`;
        setTimeout(function(){triangle.classList.remove('shuffle')}, 1000);
    }
});