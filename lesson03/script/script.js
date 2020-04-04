'use strict';
let money       = +prompt('ваш ежемесечный доход?'),//10000
    addExpenses =  prompt('перечислите ваш ежемесячные расходы'),
    deposit     =  confirm('есть ли у вас депозит в банке?'),
    expenses1   =  prompt('Введите обязательную статью расходов?'),//25
    expenses2   =  prompt('Введите обязательную статью расходов?'),
    amount1     =  prompt('Во сколько это обойдется?'),//120000
    amount2     =  prompt('Во сколько это обойдется?'),
    //bulgemount = 9950 amount1 = 120000 ожидаю 12,06

    budgetMonth =  money - (parseInt(expenses1) + parseInt(expenses2));

    console.log(budgetMonth);
let missinTime  = Math.ceil(amount1 / budgetMonth),
    budgetDay   = Math.floor(budgetMonth / 30);

  console.log(missinTime);
  console.log(addExpenses.split(','));
  console.log(budgetDay);

  if(budgetDay > 1200){
    console.log('высокий')
  }else if(budgetDay >= 600 <= 1200){
    console.log('средний')
  }else if(budgetDay > 600){
    console.log('низкий')
  }else if(budgetDay === null){
    0
  }else if(budgetDay = -budgetDay){
    console.log('Что то пошло не так')
  }else(
    console.log('неизвестная ошибка')
  )



    

