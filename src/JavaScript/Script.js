document.addEventListener('DOMContentLoaded', function () {

    // Seleciona o formulário pelo ID
    var form = document.querySelector('form');

    // Manipula o evento de envio do formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Verifica se todos os campos foram preenchidos
        var nomeReceita = document.getElementById('nome-receita').value;
        var ingredientes = document.getElementById('ingredientes').value;
        var modoPreparo = document.getElementById('modo-preparo').value;
        var tempoPreparo = document.getElementById('tempo-preparo').value;
        var porcoes = document.getElementById('porcoes').value;

        if (nomeReceita === '' || ingredientes === '' || modoPreparo === '' || tempoPreparo === '' || porcoes === '') {
            alert('Por favor, preencha todos os campos.'); // Exibe um alerta se algum campo estiver vazio
            return;
        }

        // Adiciona a classe scroll-blocked ao body
        document.body.classList.add('scroll-blocked');

        // Exibe a mensagem de sucesso
        var mensagemSucesso = document.getElementById('mensagem-sucesso');
        mensagemSucesso.innerHTML = 'Receita enviada com sucesso!<br>Após análise, sua receita estará disponível na aba "RECEITAS"!';
        mensagemSucesso.style.display = 'block';
        mensagemSucesso.style.position = 'fixed';
        mensagemSucesso.style.top = '50%';
        mensagemSucesso.style.left = '50%';
        mensagemSucesso.style.transform = 'translate(-50%, -50%)';
        mensagemSucesso.style.backgroundColor = 'rgb(252, 198, 100)';
        mensagemSucesso.style.fontFamily = 'Arial Black';
        mensagemSucesso.style.padding = '20px';
        mensagemSucesso.style.textAlign = 'center';

        mensagemSucesso.appendChild(document.createElement('br'));

        telaBloqueada.style.display = 'block';

        // Adiciona o botão de OK
        var botaoOk = document.createElement('button');
        botaoOk.textContent = 'OK';
        botaoOk.style.marginTop = '10px';
        botaoOk.addEventListener('click', function () {
            mensagemSucesso.style.display = 'none';
            telaBloqueada.style.display = 'none';
            // Remove a classe scroll-blocked do body
            document.body.classList.remove('scroll-blocked');
        });
        mensagemSucesso.appendChild(botaoOk);

        // Limpa os campos do formulário
        preview.style.display = 'none';
        customfileupload.style.display = '';
        form.reset();

    });
});

