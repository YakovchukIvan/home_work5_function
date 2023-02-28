"use strict"

// 1. Функція приймає масив і виводить його на екран.

// const arr_1 = [];
// const ul = document.createElement("ul"); // створюємо елемент u
// document.body.appendChild(ul); // поки не знаю що це 

// function returnArray() {
//     for (let i = 0; i < 10; i++ ) {
//         arr.push(Math.round( Math.random() * 100 )); 
//     }
//     return arr;
// }  // створює рандомний масив

// const newArr = returnArray(); 

// let result = newArr.map((elem) => {
//     return `
//     <li>${elem}</li>
//     `
// }).join('');

// ul.innerHTML = result;



/* 
    2. Функція приймає масив і виводить лише парні елементи.
*/


// const ul = document.createElement("ul"); // створюємо елемент u
// document.body.appendChild(ul); // поки не знаю що це 

// function returnArray() {
//     for (let i = 0; i < 10; i++ ) {
//         arr1.push(Math.round( Math.random() * 100 )); 
//     }
//     return arr1;
// }  // створює рандомний масив


// const arr_numbers42 = [-42,45,-342,65,687,-345,231,-465,23,234,-56,42,2,54,6];
// const filterOdd = arr_numbers42.filter(arr => arr % 2 === 0 && arr > 0)
// console.log(filterOdd);


// const arr1 = [];
// console.log(arr1);
// const test = arr1.filter(arr1 => (arr1 % 2 === 0))
// console.log("test", test);


// const newArr = returnArray(); 

// let result = newArr.map((elem) => {
//     return `
//     <li>${elem}</li>
//     `
// }).join('');

// ul.innerHTML = result;



//  1. Створіть функцію, яка повертає випадкове число

const taskText = document.createElement("p");
const buttonTask = document.createElement("button")
const ul = document.createElement("ul"); // створюємо елемент ul для JS
document.body.appendChild(taskText); // цією командою вже створюємо самий елемент в body
document.body.appendChild(buttonTask); 
document.body.appendChild(ul);

let number1= 0;

document.querySelector("button").onclick = function(){
    for (let i = 0; i < 10; i++ ) {
        number1 = (Math.round( Math.random() * 100 )); 
    }
    ul.innerHTML = `<li>${number1}</li>`
} // кліком по кнопці виводить рандомне число

ul.innerHTML = number1;
taskText.innerText = "1. Створіть функцію, яка повертає випадкове число";
buttonTask.innerText = "Для початку функції нажміть тут";