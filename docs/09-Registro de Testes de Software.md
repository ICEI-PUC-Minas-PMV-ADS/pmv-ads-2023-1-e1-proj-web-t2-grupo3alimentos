# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

<br>
<h2>Testes da página Home. </h2>
<br> 1-Testes dos links. Todos os menus estão direcionando para o local correto.</br>

![Links](../resource/img/home.png)

2-Testes da responsividade.
O site não se adpta para outas plataformas, conforme imagem abaixo. Precisa ser corrigido, Paulo ficará responsável
por isso para a próxima entrega. 
![Links](../resource/img/homerespon.png)
<br>

2-Testes da barra de pesquisa.
O site está direcionando os resultados das pesquisas para o Google, precisa ser 
corrigido, Paulo ficará responsável por isso na próxima entrega.
![Links](../resource/img/pesquisa.png)

 3-Testes da tela de login e contato.
O ícone está direcionando para as páginas corretamente.
![Links](../resource/img/homeloginecontato.png)



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

<br>
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

<br>
<h2>Testes da página Login. </h2>
<br> Caso de testes 1:
<br> Objetivo: Testar a funcionalidade:
<br> Saída esperada: Após o preenchimento dos campos, fazer login e ser redirecionado para a tela Home.
<br> Saída real do sistema: Ao informar e-mail e senha, é efetuado login e redirecionado para a tela inicial.
<br> Registro de execução: Êxito no teste.

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

#### Teste Tela Envie sua Receita

#### Caso de testes 1:
**Objetivo:** testar a funcionalidade.<br>
**Saída esperada:** Após o preenchimento de todos os campos, aparecer a mensagem: Receita enviada com sucesso!<br>
**Saída real do sistema:** Receita enviada com sucesso! Após análise, sua receita estará disponível na aba “RECEITAS”!<br>
**Registro de execução:** Passou na execução.<br>
![Links](../resource/img/TesteEnvie1.png)
![Links](../resource/img/TesteEnvie2.png)
![Links](../resource/img/TesteEnvie6.png)

#### Caso de testes 2:
**Objetivo:** testar a funcionalidade. <br>
**Saída esperada:** Não permitir o prosseguimento diante da ausência de preenchimento.<br> 
**Saída real do sistema:** Por favor, preencha todos os campos.<br>
**Registro de execução:** Passou na execução.<br>
![Links](../resource/img/TesteEnvie3.png)
![Links](../resource/img/TesteEnvie7.png)
 
#### Caso de testes 3:
**Objetivo:** testar a responsividade no smartphone e navegabilidade.
**Saída esperada:** Mesmas funções da tela 1920x1080.
**Saída real do sistema:** Todas as funções disponíveis e visíveis. 
**Registro de execução:** passou na execução.<br> 
![Links](../resource/img/TesteEnvie1.png)
![Links](../resource/img/TesteEnvie4.png)
![Links](../resource/img/TesteEnvie5.png)






> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)