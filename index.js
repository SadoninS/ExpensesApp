const INPUT_ERROR_MESSAGE =
  'Неверный формат ввода: Сумма расхода не может иметь отрицательное значение или равняться "0"';

const newExpenseInputNode = document.querySelector('[data-new-expense-input]');
const btnNode = document.querySelector('#addExpenseBtn');
const historyNode = document.querySelector('#historyList');

const setNewLimitBtnNode = document.querySelector('[data-set-new-limit-btn]');

let expenses = [];

const sumNode = document.querySelector('[data-sum]');
const sumInitialVlue = 0;
let sum = sumInitialVlue;
sumNode.innerText = sum;
sumNode.classList.add('currency');

const limitNode = document.querySelector('#currentLimit');
const limitInitialValue = 10000;
let limit = limitInitialValue;
limitNode.innerText = limit;
limitNode.classList.add('currency');

const statusNode = document.querySelector('#status');
const statusInitialValue = 'OK';
let status = statusInitialValue;
statusNode.innerText = status;

newExpenseInputNode.addEventListener('keyup', function (submitByEnter) {
  if (submitByEnter.keyCode === 13) {
    if (!newExpenseInputNode.value || newExpenseInputNode.value <= 0) {
      alert(INPUT_ERROR_MESSAGE);
      newExpenseInputNode.value = '';
      return;
    }

    let expense = parseFloat(newExpenseInputNode.value);
    expense = expense.toFixed(2);
    expenses.push(expense);
    newExpenseInputNode.value = '';

    let expensesListHTML = '';
    expenses.forEach((element) => {
      expensesListHTML += `<li class="currency">${element}</li>`;
    });
    historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;

    let sum = 0;
    expenses.forEach((element) => {
      element = parseFloat(element);
      sum += element;
    });
    sum = sum.toFixed(2);
    sumNode.innerText = sum;

    checkStatus(sum);
  }
});

setNewLimitBtnNode.addEventListener('click', setNewLimitHandler);

function setNewLimitHandler() {
  const newLimit = prompt('Введите новый лимит');
  const newLimitValue = parseInt(newLimit);
  limit = newLimitValue;
  limitNode.innerText = limit;
  checkStatus(sum);
}

function checkStatus(sum) {
  if (sum <= limit) return;
  else {
    statusNode.innerText = `LIMIT EXEEDED! (${limit - sum})`;
    statusNode.classList.add('status_red');
  }
}
// btnNode.addEventListener('click', function () {
//   if (!newExpenseInputNode.value || newExpenseInputNode.value < 1) {
//     alert(INPUT_ERROR_MESSAGE);
//     newExpenseInputNode.value = '';
//     return;
//   }

//   let expense = parseFloat(newExpenseInputNode.value);

//   expenses.push(expense);

//   newExpenseInputNode.value = '';

//   console.log(expenses);

//   let expensesListHTML = '';
//   expenses.forEach((element) => {
//     const elementHTML = `<li class="expenses-list-item">${element} &#x20bd</li>`;
//     expensesListHTML += elementHTML;
//   });

//   historyNode.innerHTML = `<ol class="expenses-list">${expensesListHTML}</ol>`;

//   let sum = 0;

//   expenses.forEach((element) => {
//     sum += element;
//   });

//   sumNode.innerText = sum.toFixed(2);

//   if (sum <= limit) {
//   } else {
//     statusNode.innerText = 'LIMIT EXEEDED!';
//     statusNode.classList.add('status_red');
//   }
// });
