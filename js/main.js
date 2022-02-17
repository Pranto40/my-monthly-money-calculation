window.onload  = () => {
    main ();
};

function main () {
    let calculatebtn = document.getElementById('calculate');
    let food = parseFloat(document.getElementById('food').value);
    let rent = parseFloat(document.getElementById('rent').value);
    let clothes = parseFloat(document.getElementById('clothes').value);
    
    calculatebtn.addEventListener('click', function () {
        
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
            let totalExpense = food + rent + clothes;
            document.getElementById('total-expense').innerHTML = totalExpense;

        let income = parseFloat(document.getElementById('income').value);
        let totalBlance = income - (food + rent + clothes);
        document.getElementById('balance').innerHTML = totalBlance;
        }
    });

};




