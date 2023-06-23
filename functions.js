function addExpenseHandler() {
  if (!newExpenseInputNode.value || newExpenseInputNode.value <= 0) {
    alert(INPUT_ERROR_MESSAGE);
    newExpenseInputNode.value = '';
    return;
  }
  getExpense();
  countSum(expenses);
  render();
  clearInput();
}

function render() {
  renderSum(sum);
  renderStatus();
  renderHistory();
}

function clearHistoryHandler() {
  localStorage.clear();
  expenses = [];
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
    limitStorage = JSON.stringify(limit);
    localStorage.setItem(LIMIT_LS_KEY, limitStorage);
    render();
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
  expensesStorage = JSON.stringify(expenses);
  localStorage.setItem(EXPENSES_LS_KEY, expensesStorage);
  return expense;
}

function countSum(expenses) {
  sum = 0;
  expenses.forEach((element) => {
    let expenseItem = parseFloat(element.val);
    sum += expenseItem;
  });
  sumStorage = JSON.stringify(sum);
  localStorage.setItem(SUM_LS_KEY, sumStorage);
  return sum;
}

function renderSum(sum) {
  sum = sum.toFixed(2);
  sumNode.innerText = sum;
}

function renderStatus() {
  if (sum <= limit) {
    statusNode.innerText = STATUS_INIT_VALUE;
    statusNode.classList.remove('status_red');
  } else {
    statusNode.innerText = `Shit happens!(${(limit - sum).toFixed(2)} ${CURRENCY})`;
    statusNode.classList.add('status_red');
  }
}

function renderHistory() {
  let expensesListHTML = '';
  expenses.forEach((expense) => {
    expenseValueHTML = expense.val.toFixed(2);
    expensesListHTML += `<li class="expensesItem"> ${expenseValueHTML} ${CURRENCY} ${expense.category}</li>`;
    historyNode.innerHTML = expensesListHTML;
  });
}

function clearInput() {
  newExpenseInputNode.value = '';
  expenseCategoryNode.selectedIndex = 0;
}
