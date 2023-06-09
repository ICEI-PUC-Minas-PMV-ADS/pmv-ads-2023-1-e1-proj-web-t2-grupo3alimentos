# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo. 

<h2>Funcionalidades da página Home. </h2>
A tela principal do programa, a Home Page, apresentada tão logo o cliente acesse o website (https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t2-grupo3alimentos/src/telas/Index), 
conforme podemos ver na imagem abaixo:
<img src="../docs/img/HomePage1.png">
<img src="../docs/img/HomePage2.png">
Há também no corpo da Home Page, dois links de receitas, bem como dois links de noticias disponibilizadas no programa, 
a qual os levará à página de receita direta, ou à página de notícias. A Home Page, também contém uma Barra de Busca, que
tem a finalidade de buscar receitas e notícias disponíveis no programa. Ao realizar uma busca de determinada receita ou 
notícia, o programa retornará o resultado com o link para receita ou noticia a qual foi buscado. E caso de não 
existência, retornará o resultado de “Nenhum resultado encontrado”. Conforme imagem abaixo

<img src="../docs/img/HomePage3.png">
<br><h3>Requisitos atendidos:</h3>
RF-03
<br>RNF-01
<br>RNF-02
<br>RNF-03
<br>RNF-04
<br><h3>Artefatos da funcionalidade:</h3>
Index.html
<br>Stylehp.css

<h3>Instruções de acesso:</h3>
1.	Abra o navegador de internet em um computador ou dispositivo eletrônico e informe a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t2-grupo3alimentos/src/telas/Index;
2.	A tela home page será a primeira a ser aberta;
3.	Através da tela aberta, terá a opção de realizar a busca ou acessar às receitas ou noticias disponibilizadas na home page;

<h2>Funcionalidades da página de receitas e as páginas que se desdobram dela. </h2>
<img src="../src/imgs/requireceita.png">

As funcionalidades abaixo serão aplicadas nas páginas das receitas. 

<h3>Requisitos atingidos:</h3>
<b> RF-01</b>	Receitas: O site pode oferecer uma variedade de receitas para diversos públicos, com restrições alimentares ou não.
<br> <b>RF-04</b>	Compartilhamento nas redes sociais: a possibilidade de compartilhar as receitas nas redes sociais pode ajudar a aumentar a visibilidade do site e permitir que os usuários compartilhem receitas interessantes com seus amigos e familiares.
<br> <b>RNF-01</b>	Responsivo: O site pode ser visualizado facilmente em diferentes dispositivos, como desktops, laptops e smartphones, sem precisar de zoom ou rolagem horizontal.
<br> <b>RNF-03</b>	Linguagem simples: a linguagem utilizada no site deve ser simples e acessível para que todos os usuários possam entender as informações presentes.
<br> <b>RNF-02</b>	Navegabilidade: a interface do site deve ser simples e fácil de navegar, para que os usuários possam encontrar rapidamente as receitas ou notícias que estão procurando.
<br><h3>Instruções de acesso:</h3>
1.	Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t2-grupo3alimentos/src/telas/Index
2.	A tela de receitas está localizada no menu principal, já que a home é a primeira funcionalidade exibida pelo site.
</br>
<h3>Artefatos da funcionalidade:</h3>
receitas.html
<br>receita_3.html
<br>receita_2.html
<br>receita01.html
<br>receitas.json
<br>receitas.css

<h3>Estrutura de Dados:</h3>
{
<br>"receitas": [
<br>{
<br>"id": 1,
<br>"titulo": "Torta Low Carb de Palmito e Alho-poró",
<br>"Ingredientes": "2 ovos - 40 gramas de quinoa em flocos - 120 gramas de farinha de castanha de caju
<br>"Modo de preparo": "Em um liquidificador, coloque os ovos, a quinoa, as farinhas, o azeite, uma pitada de sal, a água e bata bem. ..."
}
]
}


<h2>Funcionalidades da página Notícias. </h2>
<img src="../resource/img/noticias1.png">

<h3>Requisitos atendidos:</h3>
<b>RF-06 </b>- O site permitirá que o usuário acesse notícias externas com conteúdo relevante sobre o mundo saudável.
<br><b>RNF-01 </b>- Responsivo: O site pode ser visualizado facilmente em diferentes dispositivos, como desktops, laptops e smartphones, sem precisar de zoom ou rolagem horizontal.
<br><b>RNF-02</b>- Navegabilidade: a interface do site deve ser simples e fácil de navegar, para que os usuários possam encontrar rapidamente as receitas ou notícias que estão procurando.
<br><b>RNF-03</b>-Linguagem simples: a linguagem utilizada no site deve ser simples e acessível para que todos os usuários possam entender as informações presentes.
<br><b>RNF-04</b>- O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).

<h3>Artefatos da funcionalidade:</h3>
StyleNoticia.css
Noticias.html

<h3>Instruções de acesso:</h3>
1.	Abra o navegador de internet em um computador ou dispositivo eletrônico e informe a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t2-grupo3alimentos/src/telas/Index;
2.	Clique na aba noticias
3.	Através da tela aberta, clique na imagem ou no link da notícia, em seguida abrirá uma nova guia com a notícia selecionada.

<h2>Funcionalidades da página Sobre Nós. </h2>
A tela apresenta as caracteristicas técnicas descritas nos seguintes requisitos.

<img src="../docs/img/SobreNos1.png">
<img src="../docs/img/SobreNos2.png">

<h3>Requisitos atendidos:</h3>
RNF-01
<br>RNF-02
<br>RNF-03
<br>RNF-04

<h3>Artefatos da funcionalidade:</h3>
SobreNos.html
<br>logo.png
<br>StyleSobreNos.css
<br>fotocamila.jpg
<br>fotocarol.jpg
<br>fotopaulo.jpg
<br>fotoruan.jpg
<br>rosimeire.jpg

<h3>Instruções de acesso:</h3>
1. Abra um navegador de Internet e informe a seguinte URL:https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t2-grupo3alimentos/src/telas/Index <br>
2. A tela "sobre nós" está disponível no menu superior, da tela acessada pelo link.

<h2>Funcionalidades da página Envie a sua Receita. </h2>

<img src="../docs/img/enviereceita.png">

A tela apresenta as caracteristicas técnicas e funcionais descritas nos seguintes requisitos.
<br><h3>Requisitos atendidos:</h3>

RF-01
<br>RF-02
<br>RNF-01
<br>RNF-02
<br>RNF-03
<br>RNF-04

<h3>Artefatos da funcionalidade:</h3>

EnviesuaReceita.html
<br>Style2.css
<br>Script.js

<h3>Instruções de acesso:</h3>

1. Abra um navegador de Internet e informe a seguinte URL:https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t2-grupo3alimentos/src/telas/Index
2. A tela "Envie sua Receita" está localizada no menu principal, já que a home é a primeira funcionalidade exibida pelo site. Sendo assim, basta seleciona-la no menu principal para ser direcionado a ela.

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)