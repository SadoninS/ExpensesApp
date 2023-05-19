const expenses = [100];
console.log(expenses)

const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');

inputNode.addEventListener('keyup', function(submitByEnter){
    if (submitByEnter.keyCode === 13) {
        if (!inputNode.value || inputNode.value < 1){
            alert('Сумма расхода не может иметь отрицательное значение или равняться "0"');
            inputNode.value = '';
            return;
        }

        const expense = parseInt(inputNode.value);
    
        expenses.push(expense);
    
        inputNode.value = '';
    
        console.log(expenses)
  }
});

btnNode.addEventListener('click', function() {
    if (!inputNode.value || inputNode.value < 1){
        alert('Сумма расхода не может иметь отрицательное значение или равняться "0"');
        inputNode.value = '';
        return;
    }

    const expense = parseInt(inputNode.value);

    expenses.push(expense);

    inputNode.value = '';

    console.log(expenses)
})