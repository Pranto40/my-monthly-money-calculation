function calculate() {
    let food = parseInt(document.getElementById('food').value);
    let rent = parseInt(document.getElementById('rent').value);
    let clothes = parseInt(document.getElementById('clothes').value);

    if (food < 0) {
        alert("please enter the positive number on the food")
    }
    else if (rent < 0) {
        alert("please enter the positive number on the rent")
    }else if (clothes < 0) {
        alert("please enter the positive number on the clothes")
    }else {
        let totalExpense = foot + rent + clothes;
        document.getElementById('total-expense').innerHTML = totalExpense;
    }
}