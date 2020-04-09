'use strict';
let money;

let getMoney = function () {
  money = prompt('ваш ежемесячный доход?', 10000)

};


let appDate = {
  AdditionalIncome: {},
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
  percentDeposit: 0,
  moneyDiposit: 0,

  asking: function () {
    let addExpenses = prompt('перечислите ваш ежемесячные расходы через запятую', 'кино,тв');
    appDate.addExpenses = addExpenses.toLowerCase().split(',');
  },
  
  newIncome: function () {
    appDate.mission = prompt('Во сколько это обойдется?', 120000);
    if (confirm('есть ли у вас дополнительный заработок?')) {
      let itemIncome = prompt('какой?', 'Таксую');
      let cashIncome = +prompt('сколько вы получаете?', 1000);
      appDate.AdditionalIncome[itemIncome] = cashIncome;
    };

  },
  getappDateexpenses: function () {
    for (let key of appDate.addExpenses) {
      let appDateexpenses = +prompt("Введите обязательную статью расходов?", 25);
      if (isNumber(appDateexpenses) === true) {
        appDateexpenses * 1;
        appDate.expenses[key] = appDateexpenses;
      } else {
        while (!isNumber(appDateexpenses)) {
        return appDate.getappDateexpenses();
        }
      }

    };
  },

  getExpensesMonth: function () {
    let result = 0;
    for (let key in appDate.expenses) {
      result += appDate.expenses[key];
    }
    appDate.expenses['result'] = result;
  },
  getBudget: function () {
    appDate.budgetDay = Math.floor(appDate.budget / 30);
    appDate.budgetMonth = (appDate.budget - appDate.expenses.result) * 1;

  },
  getStatusIncome: function () {
    console.log()
  },
  getTargetMonth: function () {
    appDate.period = appDate.mission / appDate.budgetMonth;
    if (appDate.period < 0) {
      alert('цель не будет достигнута')
    } else {
      if (appDate.budgetDay > 10000) {
        appDate.income = 'высокий'
        return alert('у вас высокий уровень дохода')
      } else if (appDate.budgetDay > 5000 < 10000) {
        appDate.income = 'средний'
        return alert('у вас средний доход')
      } else {
        appDate.income = 'уровень'
        alert('низкий уровень дохода')
      }
    }

  },
  getInfoDeposit: function () {
    let deposit = confirm('есть ли у вас депозит в банке?');

    function getPercent() {
      let percentDeposit = prompt('какой процент у депозита?', 5);
      if (isNumber(percentDeposit) === true) {
        percentDeposit * 1;
        appDate.percentDeposit
      } else {
        while (!isNumber(percentDeposit)) {
          return getPercent();
        }
      };
    };

    function getMoneyDeposit() {
      let moneyDiposit = prompt('сколько вы тутда заловжили?', 5000)
      if (isNumber(moneyDiposit) === true) {
        moneyDiposit * 1;
        appDate.moneyDiposit
      } else {
        while (!isNumber(moneyDiposit)) {
          return getMoneyDeposit();
        }
      };
    }

    if (deposit) {
      getPercent();
      getMoneyDeposit();
    }
  },
  calcSaveMoney: function () {
    return appDate.period * appDate.budgetMonth
  }


};
appDate.budget = getMoney();
appDate.asking();
appDate.getappDateexpenses()
appDate.getExpensesMonth();
appDate.getBudget();
appDate.getTargetMonth();
appDate.getInfoDeposit();
appDate.newIncome();
console.log(appDate.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));//выведение массива строкой с большой буквы


for (let key in appDate) {
  console.log("Наша программа включает в себя данные: " + key, appDate[key])
}



function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
console.dir(appDate);