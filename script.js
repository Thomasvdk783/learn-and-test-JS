// let bonjour = ('Bonjour tout le monde');

let content = document.getElementById('show-container-exos');
let btnShowContent = document.getElementById('startBtn');
let btnRemoveContent = document.getElementById('stopBtn')


function showContent () {
    content.style.visibility = 'visible';
    btnShowContent.style.display = 'none';
    btnRemoveContent.style.display = 'block';
}

function removeContent () {
    content.style.visibility = 'hidden';
    btnShowContent.style.display = 'block';
    btnRemoveContent.style.display = 'none';
}

btnShowContent.addEventListener("click", showContent);
btnRemoveContent.addEventListener("click", removeContent);






