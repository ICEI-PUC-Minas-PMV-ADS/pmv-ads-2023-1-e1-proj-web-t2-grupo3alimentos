# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo. 

<h2>Funcionalidades da página Home. </h2>
<br><h3>Requisitos atendidos:</h3>
<br><h3>Artefatos da funcionalidade:</h3>
<br><h3>Estrutura de Dados:</h3>
<br><h3>Instruções de acesso:</h3>

<h2>Funcionalidades da página de receitas e as páginas que se desdobram dela. </h2>
As funcionalidade abaixo serão aplicadas nas páginas das receitas. Requisitos atingidos: 
<br> <b> RF-01</b>	Receitas: O site pode oferecer uma variedade de receitas para diversos públicos, com restrições alimentares ou não.
<br> <b>RF-04</b>	Compartilhamento nas redes sociais: a possibilidade de compartilhar as receitas nas redes sociais pode ajudar a aumentar a visibilidade do site e permitir que os usuários compartilhem receitas interessantes com seus amigos e familiares.
<br> <b>RNF-01</b>	Responsivo: O site pode ser visualizado facilmente em diferentes dispositivos, como desktops, laptops e smartphones, sem precisar de zoom ou rolagem horizontal.
<br> <b>RNF-03</b>	Linguagem simples: a linguagem utilizada no site deve ser simples e acessível para que todos os usuários possam entender as informações presentes.
<br> <b>RNF-02</b>	Navegabilidade: a interface do site deve ser simples e fácil de navegar, para que os usuários possam encontrar rapidamente as receitas ou notícias que estão procurando.
<br><h3>Instruções de acesso:</h3>
<br>1.	Abra um navegador de Internet e informe a seguinte URL: 
<br>2.	A tela de notícias é a primeira funcionalidade exibida pelo aplicativo.
<br><h3>Artefatos da funcionalidade:</h3>
<br>receitas.html
<br>receita_3.html
<br>receita_2.html
<br>receita01.html
<br>receitas.json
<br>receitas.css

<br><h3>Estrutura de Dados:
<br>
        $(function() {
            var people = [];
            $.getJSON('../../resource/data/receitas.json', function(data) {
                $.each(data.receitas, function(i, receita) {
                    var tblRow = "<tr>" +
                        "<td><h3>" + receita.titulo + " &nbsp </h3></td>" +
                        "<td><a href=" + receita.url + "><img src='"+ receita.img + "' className='float-center' width='70%' height='70%' ></a></td>"
                    "</tr>"
                    $(tblRow).appendTo("#userdata tbody");
                });

            });

        });


<h2>Funcionalidades da página Notícias. </h2>
<br><h3>Requisitos atendidos:</h3>
<br><h3>Artefatos da funcionalidade:</h3>
<br><h3>Estrutura de Dados:</h3>
<br><h3>Instruções de acesso:</h3>

<h2>Funcionalidades da página Sobre Nós. </h2>
<br><h3>Requisitos atendidos:</h3>
<br><h3>Artefatos da funcionalidade:</h3>
<br><h3>Estrutura de Dados:</h3>
<br><h3>Instruções de acesso:</h3>

<h2>Funcionalidades da página Envie a sua Receita. </h2>
<br><h3>Requisitos atendidos:</h3>
<br><h3>Artefatos da funcionalidade:</h3>
<br><h3>Estrutura de Dados:</h3>
<br><h3>Instruções de acesso:</h3>

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)