'use strict';


let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n) 
};


function startGame(){
  let random = 0;
  let randomGenerate = function() { 
  return  random = Math.floor(Math.random() * (100 - 1)) + 1
}
randomGenerate();
console.log(random,typeof random);


 let start = function(){
  let question = prompt('загадайте число от 1 до 100');
  console.log(question,typeof question)
  if(question !== null ) {
    question *= 1;
    console.log(question,typeof question);

    if(isNumber(question) === true && question !== 0){
      if(question !== random){
        if(question < random) {
          alert('введите число больше!');
          start()
        }
        else if(question > random) {
         alert('введите число меньше!');
         start()
        }
        }else{
          alert('вы победили');
        }


    }else{
      alert('это не число');
      start()
    }

  }else{
    alert('игра окончена')
  }
  
console.dir(start)
  
};
start();
}

startGame();






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