document.getElementById('lastModified').textContent = new Date().toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(',', '');


const year = new Date().getFullYear();
document.getElementById('currentYear').textContent = year;

const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const navLinks = document.getElementById('navigation');

menuIcon.addEventListener('click', () => {
    navLinks.classList.add('show');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});

// Función para cerrar el menú
closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 740) {
        menuIcon.style.display = '';
        closeIcon.style.display = '';
        navLinks.classList.remove('show');
    } else {
        if (!navLinks.classList.contains('show')) {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    }})

