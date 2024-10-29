document.getElementById('acceptCookies').addEventListener('click', function() {
    document.getElementById('cookieConsent').style.display = 'none';
});

// Función para ocultar el div de cookies después de 5 segundos
setTimeout(function() {
    document.getElementById('cookieConsent').style.display = 'none';
}, 5000);
