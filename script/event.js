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

document.getElementById('make-gold').addEventListener('click', function makeGold(){
    document.body.style.backgroundColor = 'gold';
});

document.getElementById('make-tomato').addEventListener('click', function (){
    document.body.style.backgroundColor = 'tomato';
});


// Before
const beforeSubmit = document.getElementById('before-submit');
// After
const afterSubmit = document.getElementById('after-submit');
afterSubmit.style.display = 'none';
// Submit btn
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener( 'click', function (){
    beforeSubmit.style.display = 'none';
    afterSubmit.style.display = 'block';
    afterSubmit.style.color = 'red';
    afterSubmit.style.fontSize = '16px';
} )

// User Data Update
const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener( 'click', function (){

    const userName = document.getElementById('user-name');
    const userNameValue = userName.value;

    const updatedValue = document.getElementById('updated-value');
    updatedValue.innerHTML = userNameValue;
} );

