const currency = 'руб.';
const INPUT_ERROR_MESSAGE =
  'Неверный формат ввода: Сумма расхода не может иметь отрицательное значение или равняться "0"';

const newExpenseInputNode = document.querySelector('[data-new-expense-input]');
const expenseCategoryNode = document.querySelector('[data-expense-category]');
const newExpenseBtnNode = document.querySelector('[data-add-expense-btn]');
const historyNode = document.querySelector('[data-hystory-list]');
const clearHistoryBtnNode = document.querySelector('[data-clear-expenses]');

const setNewLimitBtnNode = document.querySelector('[data-set-new-limit-btn]');

let expenses = [];

const sumNode = document.querySelector('[data-sum]');
const SUM_INIT_VALUE = 0;
let sum = SUM_INIT_VALUE;
sumNode.innerText = sum;

const limitNode = document.querySelector('[data-limit]');
const LIMIT_INIT_VALUE = 10000;
let limit = LIMIT_INIT_VALUE;
limitNode.innerText = limit;

const statusNode = document.querySelector('[data-status]');
const STATUS_INIT_VALUE = 'OK';
let status = STATUS_INIT_VALUE;
statusNode.innerText = status;

newExpenseBtnNode.addEventListener('click', addExpenseHandler);
newExpenseInputNode.addEventListener('keyup', function (submitByEnter) {
  if (submitByEnter.keyCode === 13) addExpenseHandler();
});
clearHistoryBtnNode.addEventListener('click', clearHistoryHandler);
setNewLimitBtnNode.addEventListener('click', setNewLimitHandler);

// / newExpenseInputNode.addEventListener('keyup', function (submitByEnter) {
//   if (submitByEnter.keyCode === 13) {
//     if (!newExpenseInputNode.value || newExpenseInputNode.value <= 0) {
//       alert(INPUT_ERROR_MESSAGE);
//       newExpenseInputNode.value = '';
//       return;
//     }

//     let expense = parseFloat(newExpenseInputNode.value);
//     expense = expense.toFixed(2);
//     expenses.push(expense);
//     newExpenseInputNode.value = '';

//     let expensesListHTML = '';
//     expenses.forEach((element) => {
//       expensesListHTML += `<li class="currency">${element}</li>`;
//     });
//     historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;

//     let sum = 0;
//     expenses.forEach((element) => {
//       element = parseFloat(element);
//       sum += element;
//     });
//     sum = sum.toFixed(2);
//     sumNode.innerText = sum;

//     renderStatus(sum);
//   }
// });

// newExpenseBtnNode.addEventListener('click', function () {
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
