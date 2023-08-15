/* 
   1. add event handler with the withdraw button 
   2. get the withdraw amount from the withdraw input field
   2-5: also make sure to convert the input into a number by using parseFloat
   3. Get previous withdraw total 
   4. Calculate total withdraw amount
   4-5. Set total withdraw amount
   6. Get the previous balance total amount
   7. Calculate new balance total
   7-5. Set the new balance total

*/
//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    // step-7:
    withdrawField.value = '';

    if (isNaN(newWithdraw)) {
        alert('Please provide a number');
        return;
    }


    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdraw > previousBalanceTotal) {
        alert('The bank has gone bankrupt!!')
        return;
    }

    // step-4-5: // eikaner anar karon hoiche validation er jonno
    const currentWithdrawTotal = newWithdraw + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-7:
    const currentTotalBalance = previousBalanceTotal - newWithdraw;
    //
    balanceTotalElement.innerText = currentTotalBalance;
})