const a = document.querySelector(".alert__close");
let b = document.querySelector(".alert__container");
a.addEventListener('click', function(){
    b.classList.toggle('active');
})