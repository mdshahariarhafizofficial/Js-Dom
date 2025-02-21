const li = document.getElementsByTagName('li');
console.log(li);

console.log(document.getElementsByTagName('h1'));


const wlc = document.getElementById('welcome');
wlc.innerText = "Hlw js 2025" 
console.log(wlc);

const menu = document.getElementsByClassName('menu-list');
console.log(menu);

const list = document.querySelectorAll('.list-section li');
console.log(list);
for( let li of list ){
    console.log(li.innerText);
}

const list_1 = document.querySelector('.list-section li');
console.log(list_1);
