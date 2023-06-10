
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
    } else if (senhaInput.value.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
    } else {
        window.location.href = "index.html"; // Substitua "index.html" pela URL da página para a qual deseja redirecionar
    }
}