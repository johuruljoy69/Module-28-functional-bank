// step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step-2: get withdraw amount from the deposit input field
    // and convert string withdraw  amount to a number type
    const withdrawField =  document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3: clear the withdraw input filed after getting the value
    withdrawField.value = '';

    // isNaN fix validation
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
     // step-4: get the previous withdraw total amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // step-5: calculate ne withdraw total and set the value to the withdraw total
    const currentTotalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = currentTotalWithdraw;

    // step-6: get current balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    // step-7: calculate ne withdraw total and set the value to the withdraw total element
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

      // if condition validation
      if(newWithdrawAmount > previousBalanceAmount){
        alert('No available balance');
        return;
      }

})