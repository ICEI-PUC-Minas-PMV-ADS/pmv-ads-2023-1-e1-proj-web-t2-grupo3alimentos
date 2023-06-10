
document.addEventListener("DOMContentLoaded", function() {
    var enviarEmailLink = document.getElementById("enviarEmail");
    enviarEmailLink.addEventListener("click", function(event) {
        event.preventDefault();
        var email = prompt("Digite seu e-mail:");
        if (email) {
            alert("E-mail enviado com sucesso para: " + email);
        }
    });
});