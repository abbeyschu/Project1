var button = document.getElementById('button');
var modal = document.getElementById('page-modal');
var closeModal = document.getElementsByClassName('modal-close')[0];

button.onclick = function(){
    modal.style.display = 'block'
    
}
closeModal.onclick = function(){
    modal.style.display = 'none'
}

window.onclick = function(event){
    if (event.target.className == 'modal-background'){
        modal.style.display = 'none'
    }
}
