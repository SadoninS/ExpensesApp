const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
const historyNode = document.querySelector('.js-history');

let expenses = [];

const sumNode = document.querySelector('.js-total-value');
const sumInitialVlue = 0;
let sum = sumInitialVlue;
sumNode.innerText = sum;

const limitNode = document.querySelector('.js-limit-value');
const limitInitialValue = 10000;
let limit = limitInitialValue;
limitNode.innerText = limit;

const statusNode = document.querySelector('.js-status-value')
const statusInitialValue = 'OK';
let status = statusInitialValue;
statusNode.innerText = status;

inputNode.addEventListener('keyup', function (submitByEnter) {
    if (submitByEnter.keyCode === 13) {
        if (!inputNode.value || inputNode.value <= 0) {
            alert('Сумма расхода не может иметь отрицательное значение или равняться "0"');
            inputNode.value = '';
            return;
        }

        let expense = parseFloat(inputNode.value);

        expenses.push(expense);

        inputNode.value = '';

        console.log(expenses)

        let expensesListHTML = '';

        expenses.forEach(element => {
            expensesListHTML += `<li>${element} &#x20bd</li>`;
        });

        historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;

        let sum = 0;

        expenses.forEach(element => {
            sum += element;
        });

        sumNode.innerText = sum;

        if (sum <= limit) {
            
        } else {
            statusNode.innerText = 'LIMIT EXEEDED!';
            statusNode.classList.add('status_red');
        }
    }
});

btnNode.addEventListener('click', function () {
    if (!inputNode.value || inputNode.value < 1) {
        alert('Сумма расхода не может иметь отрицательное значение или равняться "0"');
        inputNode.value = '';
        return;
    }

    let expense = parseFloat(inputNode.value);

    expenses.push(expense);

    inputNode.value = '';

    console.log(expenses);

    let expensesListHTML = '';
    expenses.forEach(element => {
        const elementHTML = `<li class="expenses-list-item">${element} &#x20bd</li>`;
        expensesListHTML += elementHTML;
    });

    historyNode.innerHTML = `<ol class="expenses-list">${expensesListHTML}</ol>`;

    let sum = 0;

    expenses.forEach(element => {
        sum += element;
    });

    sumNode.innerText = sum;

    if (sum <= limit) {
            
    } else {
        statusNode.innerText = 'LIMIT EXEEDED!';
        statusNode.classList.add('status_red');
    }

   
});

