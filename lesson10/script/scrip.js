'use strict';

let books = document.getElementsByClassName('books'),
  book = document.querySelectorAll('.book');
let bodyBgc = document.body,
  book2 = document.querySelectorAll('.book')[4].getElementsByTagName('a');
book2[0].innerHTML = '"Книга 3. this и Прототипы Объектов';

let advertising = document.querySelectorAll('.adv');
advertising[0].remove();
let book3 = document.querySelectorAll('.book')[0].getElementsByTagName('li');

book3[9].before(book3[7]);
book3[3].after(book3[6]);
book3[4].after(book3[7]);

let book5 = document.querySelectorAll('.book')[5].getElementsByTagName('li');
book5[1].after(book5[9]);
book5[2].after(book5[4]);
book5[3].after(book5[5]);

let book6 = document.querySelectorAll('.book')[2].getElementsByTagName('ul');
let newLo = document.createElement('li');
book6[0].append(newLo);
let book6li = document.querySelectorAll('.book')[2].getElementsByTagName('li');
book6li[10].textContent = 'Глава 8: За пределами ES6';
book6li[10].after(book6li[9]);
console.dir(book6li);
// console.log(book3[6]);
console.log(bodyBgc.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)');

function apend() {
  books[0].append(book[3]);
  books[0].append(book[5]);
  books[0].append(book[2]);
}
apend();
prep();

function prep() {
  books[0].prepend(book[1])
}


// books[0].prepend(book[5]);
console.log(bodyBgc)