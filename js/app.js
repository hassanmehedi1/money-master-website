function myExpenses(item) {
   let itemInput = document.getElementById(item + '-number');
   itemInputValue = parseFloat(itemInput.value);
   return itemInputValue;
};

document.getElementById('calculate-btn').addEventListener('click', function () {
   let myIncomeText = document.getElementById('income-number').value ;
   let myIncome = parseFloat(myIncomeText);
   
   let myFoodExpense = myExpenses('rent');
   let myRentExpense = myExpenses('food');
   let myClothExpense = myExpenses('cloth');

   let allExpense = myFoodExpense + myRentExpense + myClothExpense;

   let myBalance = myIncome - allExpense;

   // update on html 
   document.getElementById('totalexpense-amount').innerText = allExpense;
   document.getElementById('balance-amount').innerText = myBalance;

});