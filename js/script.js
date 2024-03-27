const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        darkModeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }else{
        darkModeToggle.innerHTML = '<i class="bi bi-moon"></i>'
    }
})
