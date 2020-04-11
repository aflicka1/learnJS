'use strict'
let start                = document.getElementById        ('start'),
    getButtons1          = document.getElementsByTagName  ('button')[0],
    getButtons2          = document.getElementsByTagName  ('button')[1],
    depositCheck         = document.querySelector         ('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll      ('.additional_income-item'),
    value                = document.getElementsByClassName('result-total'), 
    incomeItems          = document.querySelector         ('.income-items'),
    additionaincome      = document.querySelector         ('.additional_income'),
    inputExpenses        = document.querySelector         ('.expenses');

    console.log(incomeItems)