document.getElementById('deposit-button').addEventListener('click',function(){
  
   const depositField = document.getElementById('deposit-input');
   const newDepositText = depositField.value;

   const depositTotal = document.getElementById('deposit-amount');
   
   depositField.value = '';

   const newDepositAmount = parseFloat(newDepositText);


   const previousDepositeText = depositTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

   const newDepositTotal = previousDepositeAmount + newDepositAmount;
   depositTotal.innerText =newDepositTotal;
//    balance update/
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;


})
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-input');

    const withdarawAmountText = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdarawAmountText);

    const withdrawTotal = document.getElementById('withdraw-amount');
    const previousWithdrawText =  withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdraw;
    withdrawField.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceText);
    
    const newBalanceAmount = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceAmount;
})
