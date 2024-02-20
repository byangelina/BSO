window.addEventListener('load', function() {
    // Iniciar la animación
    var contenedores = document.querySelector('.contenedores');
    contenedores.classList.add('animar');
});




document.addEventListener('DOMContentLoaded', function () {
    const iconMenu = document.getElementById('icon-menu');
    const navList = document.querySelector('nav ul');

    // Agrega un evento clic al icono del menú
    iconMenu.addEventListener('click', function () {
        // Establece la posición del menú en 'left: 0'
        navList.style.left = '0';
        // Agrega una pequeña demora antes de mostrar el menú
        setTimeout(function () {
            // Muestra el menú
            navList.classList.toggle('open');
        }, 50); // 50 milisegundos de retraso
    });
});