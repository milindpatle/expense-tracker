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

const dummyTransaction = [
    {id: 1,transaction:"Books"

}];

const dummyTransaction = [
    {id:1, transaction: 'Books' , amount: -100},
    {id:2, transaction: 'Coins' , amount: 200},
    {id:3, transaction: 'Breakfast' , amount: -300},
    {id:4, transaction: 'Mobile' , amount: 400},
];
//add transaction to DOM

function addTransactionDOM(transaction){
    //get sing
    const sign =transaction.amoun<0 ? '_' : '?';
}
function init(){
    list.innerHTML = '';
    dummyTransactionDOM.forEach(addTransactionDOM);

}

init();