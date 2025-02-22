document.getElementById('comment-btn').addEventListener( 'click', function(){
    const commentBox = document.getElementById('comment-box');
    const commentBoxValue = commentBox.value; 
    
    const p = document.createElement('p');
    p.innerText = commentBoxValue;

    p.classList.add('comment')
    const commentsContainer = document.getElementById('Comments-container');
    commentsContainer.appendChild(p);

    commentBox.value = '';
} );