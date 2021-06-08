'use strict';

const balance = document.getElementById
('balance');

const moneyPlus = document.getElementById
('money-plus');
const moneyMinus = document.getElementById
('money-Minus');

const list = document.getElementById
('list');

const form = document.getElementById
('form');

const transaction= document.getElementById
('transaction');

const amount= document.getElementById
('amount');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTransaction = 
    {
        id: generateRandomID(),
        transaction: transaction.value,
        amount: +amount.value,
    };
    transaction.push(newTransaction);

});

function addTransactionDOM(transaction){
    //get sing
    const sign =transaction.amoun<0 ? '_' : '?';
}
function init(){
    list.innerHTML = '';
    dummyTransactionDOM.forEach(addTransactionDOM);

    console.log(transactions);
};

const generateRandomID =function () {
    return Math.floor(Math.random() * 1000);
};