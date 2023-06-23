const CURRENCY = 'руб.';
const LIMIT_LS_KEY = 'limit';
const LIMIT_INIT_VALUE = 10000;
const SUM_INIT_VALUE = 0;
const SUM_LS_KEY = 'sum';
const STATUS_INIT_VALUE = 'OK';
const STATUS_LS_KEY = 'status';
const EXPENSES_LS_KEY = 'expenses';
const INPUT_ERROR_MESSAGE =
  'Неверный формат ввода: Сумма расхода не может иметь отрицательное значение или равняться "0"';

const newExpenseInputNode = document.querySelector('[data-new-expense-input]');
const expenseCategoryNode = document.querySelector('[data-expense-category]');
const limitNode = document.querySelector('[data-limit]');
const setNewLimitBtnNode = document.querySelector('[data-set-new-limit-btn]');
const sumNode = document.querySelector('[data-sum]');
const statusNode = document.querySelector('[data-status]');
const newExpenseBtnNode = document.querySelector('[data-add-expense-btn]');
const clearHistoryBtnNode = document.querySelector('[data-clear-expenses]');
const historyNode = document.querySelector('[data-hystory-list]');

let limitStorage = JSON.parse(localStorage.getItem(LIMIT_LS_KEY));
let limit = limitStorage ? limitStorage : LIMIT_INIT_VALUE;
limitNode.innerText = limit;

let sumStorage = JSON.parse(localStorage.getItem(SUM_LS_KEY));
let sum = sumStorage ? sumStorage : SUM_INIT_VALUE;
renderSum(sum);

let statusStorage = JSON.parse(localStorage.getItem(STATUS_LS_KEY));
let status = statusStorage ? statusStorage : STATUS_INIT_VALUE;
renderStatus();

let expensesStorage = JSON.parse(localStorage.getItem(EXPENSES_LS_KEY));
let expenses = Array.isArray(expensesStorage) ? expensesStorage : [];
renderHistory(expenses);

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
//       expensesListHTML += `<li class="CURRENCY">${element}</li>`;
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
