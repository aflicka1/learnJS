'use strict';

let money,
    addExpenses =  prompt('перечислите ваш ежемесячные расходы'),
    deposit     =  confirm('есть ли у вас депозит в банке?'),
    expenses1   =  prompt('Введите обязательную статью расходов?',25),
    expenses2   =  prompt('Введите обязательную статью расходов?',25),
    amount1     =  prompt('Во сколько это обойдется?',120000),
    amount2     =  prompt('Во сколько это обойдется?');

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let start = function(){
  money = prompt('ваш ежемесечный доход?');
  if(money !== isNumber(money)){
    let n = 0;
    do{
      money = prompt('ваш ежемесечный доход?');
      n++
    }
    while(!isNumber(money))
  }
};
start();

// console.log(addExpenses.split(',',' '));

let getExpensesMonth = function(a, b){
  if(isNumber(a, b)){
    return +a + +b;   
  }
  
    };
let expensesResult = getExpensesMonth(expenses2,expenses1);
console.log(expensesResult);

let getAccumulatedMonth = function(a, b){
  return a - b;
};
getAccumulatedMonth(money,expensesResult);
console.log(getAccumulatedMonth(money,expensesResult));

let AccumulatedMonth = getAccumulatedMonth(money,expensesResult),
    getTargetMonth   = function(a, b){
      return a / b;
    };



if(getTargetMonth(amount1,getAccumulatedMonth(money,expensesResult)) < 0 || null){
  alert('цель не будет достигнута');
}else{
  getTargetMonth(amount1,getAccumulatedMonth(money,expensesResult));
  console.log(getTargetMonth(amount1,AccumulatedMonth));
}


let budgetDay = function(a){
  return a / 30;
};
console.log(budgetDay(AccumulatedMonth));

let showTypOf = function(type){
  console.log(typeof type)
};
showTypOf(budgetDay);

let getStatusIncome = function(statusIncome){
  console.log(statusIncome)
};
getStatusIncome(AccumulatedMonth);








