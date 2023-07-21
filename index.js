const profil = document.getElementById('profil');
const open = document.getElementById('arrow-open')
const close = document.getElementById('arrow-close')

open.addEventListener('click', function(){
    profil.classList.add('open');
    profil.classList.remove('close');
    open.classList.add('aktif');
    preventDefault()
});

close.addEventListener('click', function(){
    profil.classList.add('close');
    profil.classList.remove('open');
    open.classList.remove('aktif');


});


const openPage = document.getElementById('btn');
const closePage = document.getElementById('closePage')
const body = document.body;

openPage.addEventListener('click', function(){
    document.getElementById("wrapper").style.transform = 'scale(1)';
    document.getElementById("wrapper").style.transform = 'translateY(50%)';
    document.body.style.backdropFilter = 'blur(10px';
    
});

closePage.addEventListener('click', function(){
    document.getElementById("wrapper").style.transform = 'scale(0)'
    document.body.style.backdropFilter = 'blur(0)';

});