# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.


<h2>Testes da página Home. </h2>
<br> 1-Testes dos links. Todos os menus estão direcionando para o local correto.</br>

![Links](../resource/img/HomePage_1.png)

2-Testes da responsividade.
O programa adpta para outas plataformas, conforme imagem abaixo.
![Links](../resource/img/HomePage_Responsivo.png)
<br>

3-Testes da barra de pesquisa.
O site está direcionando os resultados das pesquisas das receitas e noticias que existem no banco de dados do programa.
![Links](../resource/img/HomePage_BuscaTorta.png)

4-Testes de falha, de receita ou noticia não existente, indicando a mensagem de "Nenhum Resultado Encontrado", funcionando corretamente.
![Links](../resource/img/HomePage_BuscaBrigadeiro.png)

5-Teste de Sucesso de Links internos do programa: Testes de sucesso dos links no conteudo da Home Page, encaminhando corretamente para todas os links existentes.
<br> A página Home Page contém quatro links, referente a duas receitas existente e duas nótícias, a qual estão funcionais.
![Links](../resource/img/HomePage_AcessandoSobreNos.png)
<br>
<h2>Testes da página de receitas e as páginas que se desdobram dela. </h2>
<br> 1-Testes dos links. Todos os menus estão direcionando para o local correto. 

![Links](../resource/img/linkreceita.png)

 2-Testes da responsividade.
O site se adpta para outas plataformas conforme exemplo de celular abaixo.
 ![Links](../resource/img/telefone.png)
<br> 3-Testes do compartilhamento de redes sociais.
O ícone está direcionando para as redes sociais corretamente.
 ![Links](../resource/img/redesociais.png)
</br>


<h2>Testes da página Sobre Nós. </h2>
<br> Caso de testes 1:
<br> Objetivo: Testar os links.
<br> Saída esperada: Direcionar o usuário para o local desejado.
<br> Saída real do sistema: Todos os menus estão direcionando para o local correto.
<br> Registro de execução: Êxito no teste.

![Links](../resource/img/linksobrenos.png)

Caso de testes 2:
<br> Objetivo: Testar a responsividade.
<br> Saída esperada: Responsividade da tela para diferentes tipos de aparelhos.
<br> Saída real do sistema: A tela se adpta para outas plataformas, todas as funções disponíveis e visíveis, conforme imagem abaixo.
<br> Registro de execução: Êxito no teste.


![Links](../resource/img/sobrenosresp.png)
![Links](../resource/img/sobrenosresp2.png)

<h2>Testes da página Login. </h2>
<br> Caso de testes 1:
<br> Objetivo: Testar a funcionalidade.
<br> Saída esperada: Após o preenchimento dos campos, fazer login e ser redirecionado para a tela Home.
<br> Saída real do sistema: Ao informar e-mail e senha, não é efetuado login somente o redirecionado para a tela inicial.
<br> Registro de execução: Falha no teste.

![Links](../resource/img/login01.png)

<br> Caso de testes 2:
<br> Objetivo: Testar a funcionalidade.
<br> Saída esperada: Não permitir o prosseguimento diante da ausência de preenchimento dos campos.
<br> Saída real do sistema: Mensagem solicitando o preenchimento de todos os campos.
<br> Registro de execução: Êxito no teste.

![Links](../resource/img/login02.png)

<br> Caso de testes 3:
<br> Objetivo: Testar a responsividade.
<br> Saída esperada: Responsividade da tela para diferentes tipos de aparelhos.
<br> Saída real do sistema: A tela se adpta para outas plataformas, todas as funções disponíveis e visíveis, conforme imagem abaixo.
<br> Resgistro de execução: Êxito no teste. 

![Links](..//resource/img/testeresponlogin.png)

<h2>Teste Tela Envie sua Receita</h2>

<br> Caso de testes 1:
<br>Objetivo: testar a funcionalidade.
<br>Saída esperada: Após o preenchimento de todos os campos, aparecer a mensagem: Receita enviada com sucesso!
<br>Saída real do sistema:Receita enviada com sucesso! Após análise, sua receita estará disponível na aba “RECEITAS”!
<br>Registro de execução: Êxito no teste.<br>

![Links](../resource/img/TesteEnvie1.png)
![Links](../resource/img/TesteEnvie2.png)
![Links](../resource/img/TesteEnvie6.png)

<br> Caso de testes 2:
<br>Objetivo: testar a funcionalidade.
<br>Saída esperada: Não permitir o prosseguimento diante da ausência de preenchimento. 
<br>Saída real do sistema: "Por favor, preencha todos os campos."
<br>Registro de execução:Êxito no teste.

![Links](../resource/img/TesteEnvie3.png)
![Links](../resource/img/TesteEnvie7.png)
 
Caso de testes 3:
<br>Objetivo: testar a responsividade no smartphone e navegabilidade.
<br>Saída esperada: Mesmas funções da tela 1920x1080.
<br>Saída real do sistema: Todas as funções disponíveis e visíveis. 
<br>Registro de execução: Êxito no teste. 

![Links](../resource/img/TesteEnvie1.png)
![Links](../resource/img/TesteEnvie4.png)
![Links](../resource/img/TesteEnvie5.png)

<h2> Teste tela Notícias </h2>
1-Testes dos links. Todos os menus estão direcionando para o local correto.
![noticias1.png](..%2Fresource%2Fimg%2Fnoticias1.png)

2-Testes da responsividade. O programa adapta para outas plataformas, conforme imagens abaixo.
![noticias2.png](..%2Fresource%2Fimg%2Fnoticias2.png)

3-Testes de direcionamento link notícia (sites externos):
![noticias3.png](..%2Fresource%2Fimg%2Fnoticias3.png)

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)