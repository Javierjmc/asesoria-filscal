// Scroll hacia contacto
function scrollToContacto() {
    document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
}

// Envío de formulario (demo)
document.getElementById("formContacto").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Gracias! Tu consulta ha sido enviada.");
    this.reset();
});
