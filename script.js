"use strict"

//  1. Створіть функцію, яка повертає випадкове число

// const taskText = document.createElement("p");
// const buttonTask = document.createElement("button")
// const ul = document.createElement("ul"); // створюємо елемент ul для JS
// document.body.appendChild(taskText); // цією командою вже створюємо самий елемент в body
// document.body.appendChild(buttonTask); 
// document.body.appendChild(ul); 

// це вище не потрібно, лише для тестування тут)

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



// 2. Створіть функцію, яка приймає дві змінні та міняє їх значення місцями


const valueForm = document.querySelector('#value-form')
const contentBlock = document.querySelector('#task_2')
let temp;
const valueUser = [];

valueForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const formData = new FormData(valueForm)
    const oneValue = formData.get("oneValue")
    const twoValue = formData.get('twoValue')

    const data ={
        oneValue,
        twoValue,
    }
    valueUser.push(data)

    render(contentBlock, valueUser)
})

function render(element, data){
    element.innerHTML = data.map(({oneValue ,twoValue}) => {
        temp = oneValue;
        oneValue = twoValue;
        twoValue = temp;
        return `
            <p>${oneValue}</p>
            <p>${twoValue}</p>
        `
    }).join(' ')
}



// 3. Створіть функцію, яка приймає число та повертає істину, якщо воно парне


const numberForm = document.querySelector('#number-form')
const contentBlock_2 = document.querySelector('#task_3')
const numberUser = [];

numberForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const formData = new FormData(numberForm)
    const enterNumber = formData.get("enterNumber")

    const data ={
        enterNumber
    }
    numberUser.push(data)

    render(contentBlock_2, numberUser)
})

function render(element, data){
    element.innerHTML = data.map(({enterNumber}) => {
        if (enterNumber % 2 == 0){
            return `<p>${enterNumber} Істина</p>`
        } else return `<p>${enterNumber} Не істина</p>`

        // return `
        //     <p>${enterNumber}</p>
        // `
    }).join(' ')
}