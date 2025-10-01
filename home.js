window.addEventListener('scroll', function() {
    const navbar = document.getElementById('minav');
    navbar.classList.toggle('scroll', window.scrollY > 50);
});

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

const toggleCheckbox = document.getElementById('dark-mode-toggle');
const body = document.body;

/**
 * 2. Función principal: Maneja el cambio de estado del toggle.
 * Añade/Remueve la clase 'dark-mode' del body y guarda la preferencia.
 */
function handleToggleChange() {
    if (toggleCheckbox.checked) {
        // Si el checkbox está marcado (ON), activar modo oscuro
        body.classList.add('dark-mode');
        // Guardar preferencia 'dark'
        localStorage.setItem('theme', 'dark');
    } else {
        // Si el checkbox NO está marcado (OFF), activar modo claro
        body.classList.remove('dark-mode');
        // Guardar preferencia 'light'
        localStorage.setItem('theme', 'light');
    }
}

/**
 * 3. Función de Persistencia: Aplica el tema guardado al cargar la página.
 */
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');

    // Si hay un tema guardado y es 'dark'
    if (savedTheme === 'dark') {
        // 3.1. Aplicar la clase al body
        body.classList.add('dark-mode');
        // 3.2. Asegurar que el checkbox (el toggle visual) esté marcado
        toggleCheckbox.checked = true;
    } 
    // Si es 'light' o no hay nada, el body queda con el estilo por defecto (claro)
    // y el checkbox queda desmarcado por defecto en el HTML.
}

// 4. Asignar el Evento
// Escuchar el evento 'change' en el checkbox. Este evento se dispara 
// cada vez que el usuario marca o desmarca el control.
toggleCheckbox.addEventListener('change', handleToggleChange);

// 5. Ejecutar la función de persistencia al cargar el script
applySavedTheme();
