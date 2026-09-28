// Esperamos a que todo el contenido HTML haya cargado
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Configuración de los datos de WhatsApp
    const numeroWhatsApp = "+51918001581"; 
    const mensaje = "Hola Lic. Dulce Risco G., me gustaría agendar una cita por problemas en mi lesión.";
    
    // 2. Formateo de la URL (wa.me)
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // 3. Selección del botón de WhatsApp en el HTML
    const botonWhatsApp = document.getElementById("btn-whatsapp");
    
    // 4. Asignar la URL al botón para que abra en una nueva pestaña
    if(botonWhatsApp) {
        botonWhatsApp.href = urlWhatsApp;
    }
});