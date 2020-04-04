'use strict';

let random = function() { 
  return Math.floor(Math.random() * (100 - 1)) + 1
}

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
};

random();
console.log(random());


let start = function() {
  let question = prompt('загадайте число от 1 до 100');
  console.log(question,typeof question)
  if(question !== null) {
    question *= 1;
    console.log(question,typeof question);

    if(question !== isNumber(question)){
      
    }else{
      alert('это не число')
      console.log(1+1);
    }

  }else{
    alert('игра окончена')
  }
};

start();





// else if(question !== isNumber(question)) {
//   alert('это не число');
//   start()
// }
 // if(question !== null) {
  //   question *=1;

  //   if(question !==  isNumber(question)){
      
  //     if(question === random()){
  //       alert('вы победили');
  //     }else{
  //       if(question < random()) {
  //         alert('введите число больше!');
  //         start()
  //       }
  //       else if(question > random()) {
  //        alert('введите число меньше!');
  //        start()
  //       }
  //       else if(question === null){
  //         alert('игра окончена');
  //       }
  //     }

  //   }
  //   else{
  //     alert('это не число');
  //    start()
  //   }
  //   }
  // else {
  //   alert('игра окончена');
  // };

  // };