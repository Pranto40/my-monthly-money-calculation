
    document.getElementById('calculate').addEventListener('click', function () {
        let food = parseInt(document.getElementById('food').value);
        let rent = parseInt(document.getElementById('rent').value);
        let clothes = parseInt(document.getElementById('clothes').value);

        //  calculation a total expense
        let totalExpense = food + rent + clothes;
        document.getElementById('total-expense').innerHTML = totalExpense;

        let income = parseInt(document.getElementById('income').value);
        let totalBlance = income - (food + rent + clothes);
        document.getElementById('balance').innerHTML = totalBlance;
        // condition declear
        if (isNaN(income) || income < 0) {
            let incomeError = document.getElementById('income-error');
            incomeError.innerHTML = 'please enter the number on the income';
        }
        else if (income < totalExpense) {
        let balanceError = document.getElementById('balance-error');
        balanceError.innerHTML = 'You have overcharged';
        }

        if (isNaN(food) || food < 0){
        let foodError = document.getElementById('food-error');
        foodError.innerHTML = 'please enter the number on the food';
        }
        else if (isNaN(rent) || rent < 0) {
        let foodError = document.getElementById('rent-error');
        foodError.innerHTML = 'please enter the number on the rent';
        }
        else if (isNaN(clothes) || clothes < 0) {
        let foodError = document.getElementById('clothes-error');
        foodError.innerHTML = 'please enter the number on the clothes';
        }
    });   

// saving buttan claculate
    document.getElementById('saveButton').addEventListener('click', function () {
        let income = parseInt(document.getElementById('income').value);
        let food = parseInt(document.getElementById('food').value);
        let rent = parseInt(document.getElementById('rent').value);
        let clothes = parseInt(document.getElementById('clothes').value);
        // Saving amount claculate
        let persentesValue = parseInt(document.getElementById('persentes-value').value);
        let calculateValue = income * (persentesValue/100);
        document.getElementById('saving-amount').innerHTML = calculateValue;
        // Remaining Balance claculate
        let totalBlance = income - (food + rent + clothes);
        let remainingBalance = totalBlance - calculateValue;
        document.getElementById('remaining-balance').innerHTML = remainingBalance;
         // Saving error 
        if (totalBlance < calculateValue) {
         let savingError = document.getElementById('saving-error');
         savingError.innerHTML = 'your balance low you not saving money';
        }
 });
 

