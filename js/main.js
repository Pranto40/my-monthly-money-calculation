window.onload  = () => {
    main ();
};
    let income = parseInt(document.getElementById('income').value);
    let calculatebtn = document.getElementById('calculate');
    let food = parseInt(document.getElementById('food').value);
    let rent = parseInt(document.getElementById('rent').value);
    let clothes = parseInt(document.getElementById('clothes').value);

    // calculation a total balance
    let totalBlance = income - (food + rent + clothes);

    // calculate button addEventListener handle and function decleare
function main () {
     
    calculatebtn.addEventListener('click', function () {
        // error condition
        if (food < 0){
            let foodError = document.getElementById('food-error');
            foodError.innerHTML = 'please enter the positive number on the food';
        }
        else if (rent < 0) {
            let foodError = document.getElementById('rent-error');
            foodError.innerHTML = 'please enter the positive number on the rent';
        }
        else if (clothes < 0) {
            let foodError = document.getElementById('clothes-error');
            foodError.innerHTML = 'please enter the positive number on the clothes';
        }
        else {
            // calculation a total expense
            let totalExpense = food + rent + clothes;
            document.getElementById('total-expense').innerHTML = totalExpense;

            let income = parseInt(document.getElementById('income').value);
            document.getElementById('balance').innerHTML = totalBlance;
            if (income < 0) {
                let incomeError = document.getElementById('income-error');
                incomeError.innerHTML = 'please enter the positive number on the income';
            }
            else if (income < totalExpense) {
                let balanceError = document.getElementById('balance-error');
                balanceError.innerHTML = 'your amount low';
                }
            }
    });

};
// save button addEventListener handle and function decleare
document.getElementById('saveButton').addEventListener('click', function () {
    let persentesValue = parseInt(document.getElementById('persentes-value').value);
    let calculateValue = income / persentesValue;
    document.getElementById('saving-amount').innerHTML = calculateValue;

    let remainingBalance = totalBlance - calculateValue;
    document.getElementById('remaining-balance').innerHTML = remainingBalance;

});




