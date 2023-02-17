// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get deposit amount from the deposit input field
    // and convert string deposit amount to a number type
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3: clear the deposit input filed after getting the value
        depositField.value = '';

    // step-4: get the previous total amount
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    // step-5: calculate ne deposit total and set the value to the deposit total
    const currentDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = currentDepositTotal;

    // step-6: get current balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    const currentBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = currentBalanceTotal;


})