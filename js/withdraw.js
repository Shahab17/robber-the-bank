 /* 
    1. add event handler with the withdraw button 
    2. get the withdraw amount from the withdraw input field
    2.5: also make sure to convert the input into a number by using parseFloat
*/
    //step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step-4:
    const currentWithdrawTotal = newWithdraw + previousWithdrawTotal;
    //step-5
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // step-7:
    const currentTotalBalance = previousBalanceTotal - currentWithdrawTotal;
    //
    balanceTotalElement.innerText = currentTotalBalance;


    withdrawField.value = '';
})