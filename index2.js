let expenses = [1];

let inputNode = document.querySelector('.js-input');
let btnNode = document.querySelector('.js-btn');
let historyNode = document.querySelector('js-history');

initApp();

function initApp() {


    let sumNode = document.querySelector('.js-total-value');
    let sumInitialVlue = 0;
    let sum = sumInitialVlue;
    sumNode.innerText = sum;

    let limitNode = document.querySelector('.js-limit-value');
    let limitInitialValue = 10000;
    let limit = limitInitialValue;
    limitNode.innerText = limit;

    const statusNode = document.querySelector('.js-status-value')
    const statusInitialValue = 'OK';
    let status = statusInitialValue;
    statusNode.innerText = status;


};



function trackExpenses() {
        if (!inputNode.value || inputNode.value < 1) {
            alert('Сумма расхода не может иметь отрицательное значение или равняться "0"');
            inputNode.value = '';
            return;
        };

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
            return;
        } else {
            statusNode.innerText = 'LIMIT EXEEDED!';
            statusNode.classList.add('status_red');
        }
    };

    btnNode.addEventListener('click', trackExpenses());
