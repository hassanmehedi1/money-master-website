function myExpenses(item) {
   let itemInput = document.getElementById(item + '-number');
   itemInputValue = parseFloat(itemInput.value);

   return itemInputValue;

};

function myIncomeAll() {
   let myIncomeText = document.getElementById('income-number').value ;
   let myIncome = parseFloat(myIncomeText);
   return myIncome;
};

function myExpenseAll() {
   let myFoodExpense = myExpenses('rent');
   let myRentExpense = myExpenses('food');
   let myClothExpense = myExpenses('cloth');
   
   let allExpense = myFoodExpense + myRentExpense + myClothExpense;
   return allExpense; 
   
};

function myBalanceAll() {
   let myIncome = myIncomeAll()
   let myBalance = myIncome - myExpenseAll();
   return myBalance;
};
// calculate button handler
document.getElementById('calculate-btn').addEventListener('click', function () {
   let myIncome = myIncomeAll()
   let myFoodExpense = myExpenses('rent');
   let myRentExpense = myExpenses('food');
   let myClothExpense = myExpenses('cloth');
   // validation checking
   if (myIncome < 0 && myFoodExpense < 0 && myRentExpense < 0 && myClothExpense < 0) {
      alert("please! put a positive number");
   }
   else{
      const notifyFail = document.getElementById('notify-fail');
   if (myExpenseAll() > myIncomeAll()) {
      notifyFail.style.display = 'block';
   }
   else{
      //update on html 
   notifyFail.style.display = 'none';
   document.getElementById('totalexpense-amount').innerText = myExpenseAll();
   document.getElementById('balance-amount').innerText = myBalanceAll();
   }
   }
   
   
});

//Saving button handler
document.getElementById('save-btn').addEventListener('click', function () {
   let myIncome = myIncomeAll();

   let saving = document.getElementById('save-number');
   let mySaving = parseFloat(saving.value);
   // validation checking
   if (mySaving < 0 ) {
      alert("please put a positive valid number")
   }
   else{
      let totalSaving = (mySaving / 100) * myIncome;

   // remaining balance
   let remainBalance = myBalanceAll() - totalSaving;
   const notifyFail = document.getElementById('notify-fail-save');

   if (totalSaving > myBalanceAll()) {
      notifyFail.style.display = 'block';
   }
   else{
   // update html
   notifyFail.style.display = 'none';
   document.getElementById('saving-amount').innerText = totalSaving;
   document.getElementById('remainingbalance-amount').innerText = remainBalance;
   }
}
   

});