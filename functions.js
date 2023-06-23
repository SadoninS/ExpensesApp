function addExpenseHandler() {
  if (!newExpenseInputNode.value || newExpenseInputNode.value <= 0) {
    alert(INPUT_ERROR_MESSAGE);
    newExpenseInputNode.value = '';
    return;
  }
  getExpense();
  countSum(expenses);
  renderSum(sum);
  renderStatus(sum);
  renderHistory();
  clearInput();
}

function clearHistoryHandler() {
  historyNode.innerHTML = '';
  sumNode.innerHTML = SUM_INIT_VALUE;
  statusNode.innerHTML = STATUS_INIT_VALUE;
  statusNode.classList.remove('status_red');
}

function setNewLimitHandler() {
  const newLimit = prompt('Введите новый лимит');
  if (newLimit) {
    const newLimitValue = parseInt(newLimit);
    limit = newLimitValue;
    limitNode.innerText = limit;
    renderStatus(sum);
  } else return;
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

function renderSum(sum) {
  sum = sum.toFixed(2);
  sumNode.innerText = sum;
}

function renderStatus(sum) {
  if (sum <= limit) {
    statusNode.innerText = STATUS_INIT_VALUE;
    statusNode.classList.remove('status_red');
  } else {
    statusNode.innerText = `LIMIT EXEEDED!(${(limit - sum).toFixed(2)})`;
    statusNode.classList.add('status_red');
  }
}

function renderHistory() {
  let expensesListHTML = '';
  expenses.forEach((expense) => {
    expenseValueHTML = expense.val.toFixed(2);
    expensesListHTML += `<li class="expensesItem"> ${expenseValueHTML} ${currency} ${expense.category}</li>`;
    historyNode.innerHTML = expensesListHTML;
  });
}

function clearInput() {
  newExpenseInputNode.value = '';
  expenseCategoryNode.selectedIndex = 0;
}
