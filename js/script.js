var hidden = document.querySelectorAll('.hidden');
var loadmore = document.querySelector('.btn-loadmore');


loadmore.addEventListener("click", function(event){
    event.preventDefault();

    for (i=0; i < hidden.length; i++) {
        hidden[i].classList.remove('hidden');
    };
    loadmore.classList.add('hidden');
})