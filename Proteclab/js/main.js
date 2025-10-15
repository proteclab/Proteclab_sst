// Abrir/cerrar chat
function toggleChat() {
  const box = document.getElementById('chatBox');
  box.classList.toggle('hidden-section');
}

// Validación simple del formulario de contacto
const form = document.querySelector('#contacto form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("✅ Tu mensaje ha sido enviado. Te contactaremos pronto.");
    form.reset();
  });
}

