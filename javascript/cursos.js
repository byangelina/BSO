// Función para mostrar la ventana emergente cuando se hace clic en "Cursos"
document.getElementById('cursos-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que se siga el enlace
    document.getElementById('overlay').style.display = 'flex';
});

// Función para cerrar la ventana emergente
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}