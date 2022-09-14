//step no 1 get the button by using add event listener 
document.getElementById("withdraw-btn").addEventListener("click", function () {
    // step no 2 get input field to get the input value 
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawBalanceString = withdrawField.value;
    const newWithdrawBalance = parseFloat(withdrawBalanceString);

    // step no 3 get withdraw element to get withdraw 
    const previousWithdrawMoneyElement = document.getElementById("withdraw-money");
    const previousTotalMoneyString = previousWithdrawMoneyElement.innerText;
    const previousWithdrawMoney = parseFloat(previousTotalMoneyString);

    // step no 4 get current withdraw money 
    const currentWithdraw = previousWithdrawMoney + newWithdrawBalance;
    previousWithdrawMoneyElement.innerText = currentWithdraw;

    // step no 5 get withdraw from total balance 
    const totalBalanceElement = document.getElementById("total-balance");
    const totalBalanceElementString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceElementString);

    // step no 6 get withdraw money from total balance 
    const currentTotalBalance = totalBalance - newWithdrawBalance;
    totalBalanceElement.innerText = currentTotalBalance;

    withdrawField.value = "";
})