const textInput = document.getElementById('text-input');
textInput.addEventListener( 'keyup', function(){
    const sucMsg = document.getElementById('suc-msg');
    const deleteBtn = document.getElementById('delete-btn');
    const typingValue = event.target.value;
    if ( typingValue === 'delete' ) {
           deleteBtn.removeAttribute('disabled');
           deleteBtn.addEventListener( 'click', function(){
            sucMsg.style.display = 'block';
           } )     
    }else{
        deleteBtn.setAttribute('disabled', true);
    }
    
} );

