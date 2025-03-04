const list = document.getElementById('list');

list.addEventListener('click', (e) => {
    if ( e.target.matches('li') ) {
        e.target.style.backgroundColor = 'green';
    }

});
function addElement() {
    const newElement = document.createElement('li');
    const newElementValue = document.getElementById('new-element-value').value;
    newElement.innerText = newElementValue;
    list.appendChild(newElement);
}