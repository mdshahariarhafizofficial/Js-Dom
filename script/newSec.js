// Section Create
const section = document.createElement('section');
console.log(section);
section.style.backgroundColor = 'green';
section.style.Color = 'black';
section.style.padding = '50px';
section.style.margin = '40px';
section.style.borderRadius = '10px';

// Section Added in Parent
const header = document.getElementById('header');
header.appendChild(section)


const h1 = document.createElement('h1');
h1.innerText = "Fruit Items";
section.appendChild(h1)
h1.style.color = 'black';
h1.style.fontSize = '50px';

// List item Add

const ul = document.createElement('ul');
section.appendChild(ul);

// li add
const li1 = document.createElement('li');
li1.innerText = 'Mango';
ul.appendChild(li1);
li1.style.color = 'white';
li1.style.fontSize = '25px';

const li2 = document.createElement('li');
li2.innerText = 'Banana';
ul.appendChild(li2);
li2.style.color = 'white';
li2.style.fontSize = '25px';

const li3 = document.createElement('li');
li3.innerText = 'Lemon';
ul.appendChild(li3);
li3.style.color = 'white';
li3.style.fontSize = '25px';