'use strict';
let money;

let getMoney = function () {
  money = prompt('ваш ежемесячный доход?', 10000)
  if (isNumber(money) === true) {
    return money * 1;
  } else {
    while (!isNumber(money)) {
      getMoney();
    }
  }
};
// console.log(getMoney());


let appDate = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 120000,
  period: 3,
  expensesMonth: 0,
  budgetMonth: 0,
  budgetDay: 0,

  asking: function () {
    let addExpenses         = prompt('перечислите ваш ежемесячные расходы через запятую');
        appDate.addExpenses = addExpenses.toLowerCase().split(',');
        appDate.deposit     = confirm('есть ли у вас депозит в банке?'),
        appDate.mission     = prompt('Во сколько это обойдется?', 120000);
    for (let key of appDate.addExpenses) {
      appDate.expenses[key] = +prompt("Введите обязательную статью расходов?", 25);
    }
    

  },
  getExpensesMonth: function () {
    let result = 0;
    for (let key in appDate.expenses) {
      result += appDate.expenses[key];
    }
    appDate.expenses['result'] = result;
    console.log(appDate.expenses)
  },
  getBudget: function () {
    appDate.budgetDay = Math.floor(appDate.budget / 30);
    appDate.budgetMonth = (appDate.budget - appDate.expenses.result) * 1;
    console.log(appDate.budgetDay, appDate.budgetMonth)

  },
  getStatusIncome: function () {
    console.log()
  },
  getTargetMonth: function () {
    appDate.period = appDate.mission / appDate.budgetMonth;
    if(appDate.period < 0){
      alert('цель не будет достигнута')
    }else{
      if(appDate.budgetDay > 10000){
        appDate.income = 'высокий'
       return alert('у вас высокий уровень дохода')
      }
      else if(appDate.budgetDay > 5000 < 10000){
        appDate.income = 'средний'
       return alert('у вас средний доход')
      }
      else{
        appDate.income = 'уровень'
        alert('низкий уровень дохода')
      }
    }
    
  },
};
appDate.asking();
appDate.budget = getMoney();
appDate.getExpensesMonth();
appDate.getBudget();
appDate.getTargetMonth();
console.log(appDate.expenses.result,Math.floor(appDate.period) + " month",appDate.income);
console.log(appDate);
for (let key in appDate) {
  console.log("Наша программа включает в себя данные: " + key,appDate[key])
}


function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
