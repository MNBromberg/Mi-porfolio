// Menú desplegable para celulares
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar el menú al hacer clic en cualquier enlace (en móviles)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Validación simple del formulario de contacto con JavaScript
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Por favor, completa todos los campos.";
        return;
    }

    // Simulación de envío exitoso
    formMessage.style.color = "green";
    formMessage.textContent = "¡Mensaje enviado con éxito! Gracias por contactarte.";
    
    // Limpiar el formulario
    contactForm.reset();

    // Borrar el mensaje después de 4 segundos
    setTimeout(() => {
        formMessage.textContent = "";
    }, 4000);
});