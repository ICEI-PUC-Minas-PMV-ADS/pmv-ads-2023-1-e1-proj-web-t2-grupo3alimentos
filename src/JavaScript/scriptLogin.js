
document.addEventListener("DOMContentLoaded", function() {
    var enviarEmailLink = document.getElementById("enviarEmail");
    enviarEmailLink.addEventListener("click", function(event) {
        event.preventDefault();
        var email = prompt("Digite seu e-mail:");
        if (email) {
            alert("E-mail enviado com sucesso para: " + email);
        }
        else {
            alert("E-mail não encontrado!");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var botaoEntrar = document.getElementById("botaoEntrar");
    botaoEntrar.addEventListener("click", function(event) {
        event.preventDefault();
        validarFormulario();
    });
});

function validarFormulario() {
    var loginInput = document.getElementById("ilogin");
    var senhaInput = document.getElementById("isenha");

    if (loginInput.value.trim() === "" || senhaInput.value.trim() === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        window.location.href = "../telas/Index.html"; // Substitua "index.html" pela URL da página para a qual deseja redirecionar
    }
}