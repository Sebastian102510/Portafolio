document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CAMBIO DE TEMA CLARO / OSCURO
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Detectar si el usuario ya tenía una preferencia guardada
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });

    // 2. FORMULARIO DE CONTACTO
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                formStatus.style.color = '#ef4444';
                formStatus.textContent = 'Por favor, completa todos los campos.';
                return;
            }

            formStatus.style.color = 'var(--accent)';
            formStatus.textContent = 'Enviando mensaje...';

            setTimeout(() => {
                formStatus.style.color = '#10b981';
                formStatus.textContent = `¡Gracias ${nombre}! Tu mensaje ha sido enviado exitosamente.`;
                contactForm.reset();
            }, 1200);
        });
    }

    // 3. NAVEGACIÓN ACTIVA SEGÚN SCROLL
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = 'var(--text-muted)';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--accent)';
            }
        });
    });
});