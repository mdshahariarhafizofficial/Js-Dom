function makeRed(){
    document.body.style.backgroundColor = 'red';
}

function makeYellow(){
    document.body.style.background = 'yellow';
}

const makeBlue = document.getElementById('make-blue');

makeBlue.onclick = function(){
    document.body.style.background = 'blue';
}

const btnPurple = document.getElementById('make-purple');
btnPurple.onclick = makePurple;

function makePurple(){
    document.body.style.background = 'purple';
}