"use strict"

//  1. Створіть функцію, яка повертає випадкове число

// const taskText = document.createElement("p");
// const buttonTask = document.createElement("button")
// const ul = document.createElement("ul"); // створюємо елемент ul для JS
// document.body.appendChild(taskText); // цією командою вже створюємо самий елемент в body
// document.body.appendChild(buttonTask); 
// document.body.appendChild(ul); 

// це вище не потрібно, лише для тестування тут)

// let number1= 0;

// document.querySelector("button").onclick = function(){
//     for (let i = 0; i < 10; i++ ) {
//         number1 = (Math.round( Math.random() * 100 )); 
//     }
//     ul.innerHTML = `<li>${number1}</li>`
// } // кліком по кнопці виводить рандомне число

// ul.innerHTML = number1;
// taskText.innerText = "1. Створіть функцію, яка повертає випадкове число";
// buttonTask.innerText = "Для початку функції нажміть тут";




// 2. Створіть функцію, яка приймає дві змінні та міняє їх значення місцями

// const valueForm = document.querySelector('#value-form')
// const contentBlock = document.querySelector('#task_2')
// let temp;
// const valueUser = [];

// valueForm.addEventListener('submit', (event)=>{
//     event.preventDefault()
//     const formData = new FormData(valueForm)
//     const oneValue = formData.get("oneValue")
//     const twoValue = formData.get('twoValue')

//     const data ={
//         oneValue,
//         twoValue,
//     }
//     valueUser.push(data)

//     render(contentBlock, valueUser)
// })

// function render(element, data){
//     element.innerHTML = data.map(({oneValue ,twoValue}) => {
//         temp = oneValue;
//         oneValue = twoValue;
//         twoValue = temp;
//         return `
//             <p>${oneValue}</p>
//             <p>${twoValue}</p>
//         `
//     }).join(' ')
// }




// 3. Створіть функцію, яка приймає число та повертає істину, якщо воно парне

// Чомусь код з 2 завдання починає переписуватися з кодом із 3 завдання 
// і потрібно коментувати одне або інше щоб все працювало

// const numberForm = document.querySelector('#number-form')
// const contentBlock_2 = document.querySelector('#task_3')
// const numberUser = [];

// numberForm.addEventListener('submit', (event)=>{
//     event.preventDefault()
//     const formData = new FormData(numberForm)
//     const enterNumber = formData.get("enterNumber")

//     const data ={
//         enterNumber
//     }
//     numberUser.push(data)

//     render(contentBlock_2, numberUser)
// })



// function render(element, data){
//     element.innerHTML = data.map(({enterNumber}) => {
//         if (enterNumber % 2 == 0){
//             return `<p>${enterNumber} Істина</p>`
//         } else return `<p>${enterNumber} Не істина</p>`
//     }).join(' ')
// }




// 4. Створіть функцію, яка приймає два числа та повертає найбільший спільний дільник (НСД)

// let y = 15;
// //  +prompt("Введіть перше число: ");
// let x = 35;
// //  +prompt("Введіть другечисло: ");

// // function NOD (x, y) {
// // 	if (y > x) return NOD(y, x);
// // 	if (!y) return x;
// // 	return NOD(y, x % y);
// // }
// // console.log(NOD(number1, number2));



// Спробував за хардкодити щоб вводити в input і кнопкою видає результат та не вийшло ...



// const divisorForm = document.querySelector('#divisor-form');
// const contentBlock_3 = document.querySelector('#task_4');
// const divisorUsers = [];

// divisorForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(divisorForm);
//     const oneNumber = formData.get("oneNumber");
//     const twoNumber = formData.get("twoNumber");

//     const divisor = {
//         oneNumber,
//         twoNumber
//     }
//     divisorUsers.push(divisor)

//     render(contentBlock_3, divisorUsers)
// })


// === десь в цьому куску проблема, не зміг знайти рішення як туди вставити форумулу ***

// function render(element, data){
//     while (oneNumber!=twoNumber) {
//         if (oneNumber>twoNumber) {
//             oneNumber = oneNumber - twoNumber;
//             console.log("number1",oneNumber);
//         }
//         else {
//             twoNumber = twoNumber - oneNumber;
//             console.log("number2",twoNumber);
//         }
//     }
//     element.innerHTML = data.map(({oneNumber, twoNumber}) => {
        
//         return `<p>${twoNumber, oneNumber} Істина</p>`
//     }).join(' ')
// }
