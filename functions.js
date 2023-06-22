function setNewLimitHandler() {
  const newLimit = prompt('Введите новый лимит');
  const newLimitValue = parseInt(newLimit);
  limit = newLimitValue;
  limitNode.innerText = limit;
  checkStatus(sum);
}

function checkStatus(sum) {
  if (sum <= limit) {
    statusNode.innerText = STATUS_INIT_VALUE;
    statusNode.classList.remove('status_red');
  } else {
    statusNode.innerText = `LIMIT EXEEDED! (${(limit - sum).toFixed(2)})`;
    statusNode.classList.add('status_red');
  }
}

function getExpense() {
  let expense = {
    val: 0,
    category: '',
  };
  expense.val = parseFloat(newExpenseInputNode.value);
  expense.category = expenseCategoryNode.value;
  expenses.push(expense);
  return expense;
}

function countSum(expenses) {
  sum = 0;
  expenses.forEach((element) => {
    let expenseItem = parseFloat(element.val);
    sum += expenseItem;
  });
  return sum;
}

function renderExpenses() {
  let expensesListHTML = '';
  expenses.forEach((expense) => {
    expenseValueHTML = expense.val.toFixed(2);

    expensesListHTML += `<li class="expensesItem"> ${expenseValueHTML} ${currency} ${expense.category}</li>`;
    historyNode.innerHTML = expensesListHTML;
  });
}

function renderSum(sum) {
  sum = sum.toFixed(2);
  sumNode.innerText = sum;
}
