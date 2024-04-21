const hamburgermenu = document.querySelector('#hamburgermenu');
const navbar = document.querySelector('.navbar');

hamburgermenu.addEventListener('click', function() 
{
    navbar.classList.add('active');
});

navbar.addEventListener('click', function() 
{
   
    navbar.classList.remove('active');
});