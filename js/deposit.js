//step no 1 add event listener to get deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
    //step no 2 get the deposit field to get input field value
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step get the deposit money 
    const depositElementTotal = document.getElementById("deposit-money");
    const previousDepositTotalString = depositElementTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step no 4 numbers to set the total deposit
    const currentDepsitTotal = newDepositAmount + previousDepositTotal;
    depositElementTotal.innerText = currentDepsitTotal;

    // step no 5get total balance
    const totalBalanceElement = document.getElementById("total-balance");
    const totalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(totalBalanceString);

    //step no 6 calculate current total balance
    currentTotalBalance = previousTotalBalance + newDepositAmount;
    totalBalanceElement.innerText = currentTotalBalance;



    // step no clear the deposit field 
    depositField.value = "";
})