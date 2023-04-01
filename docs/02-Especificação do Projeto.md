# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> O projeto visa disponibilizar esse ambiente com receitas para o público com necessidades específicas. Possuímos atualmente poucos espaços com esse intuito e a estimativa é de que, nos próximos cinco anos, o comércio de produtos “free from” tenha um aumento de 6,3% por ano, alcançando a receita de R$2,52 bilhões em 2022. Com isso, tendências promissoras podem surgir, como criação de lojas especializadas; clubes de assinaturas; restaurantes veganos; lanchonetes fitness; cafeterias sem lactose, entre outros.
</a></span>


## Personas

## Ana Freitas 
Idade: 33 anos
Profissão: Dançarina profissional
Personalidade: Ana é uma pessoa determinada, disciplinada e focada em sua carreira. Ela é apaixonada por dança e dedica grande parte de seu tempo para aprimorar suas habilidades. Ana é ativa e gosta de se exercitar, além de ter um grande interesse em alimentação saudável e fitness.
Histórico de saúde: Ana nunca teve problemas de saúde sérios, mas sabe que uma alimentação adequada pode melhorar seu desempenho como dançarina. Ela procura sempre comer de forma equilibrada e saudável, evitando alimentos processados e ricos em açúcar.
Desafios: Como dançarina, Ana precisa manter um corpo forte e saudável, e sabe que a alimentação é parte importante desse processo. Ela tem dificuldades em encontrar opções de alimentos saudáveis e nutritivos em lugares onde está viajando, como hotéis e restaurantes de fast-food. Ela também precisa garantir que sua dieta forneça a quantidade adequada de proteínas para manter a saúde muscular.
Objetivos: Ana deseja encontrar um plano alimentar que seja adaptado às suas necessidades como dançarina, que forneça energia para suas atividades e ajude a manter um corpo forte e saudável. Ela procura alimentos ricos em proteínas, vitaminas e minerais, além de suplementos que possam ajudá-la a alcançar seus objetivos de forma saudável. Ana está disposta a aprender sobre novos alimentos e receitas saudáveis para incluir em sua rotina alimentar.

## Luiza 
Idade: 28 anos
Profissão: Estudante de medicina
Personalidade: Luiza é uma jovem ativa, alegre e animada. Ela gosta de praticar esportes, viajar e experimentar novos pratos. Ela é muito dedicada aos estudos e tem um grande interesse em nutrição e saúde.
Histórico de saúde: Luiza foi diagnosticada com intolerância à lactose há cerca de dois anos. Desde então, ela tem evitado consumir produtos lácteos e tem se esforçado para encontrar alternativas saudáveis e saborosas.
Desafios: Luiza tem dificuldades para encontrar opções de alimentos que não contenham lactose em restaurantes e lanchonetes. Ela também se preocupa em obter a quantidade adequada de cálcio e outros nutrientes que são encontrados em produtos lácteos. Além disso, ela precisa estar atenta aos rótulos dos alimentos para evitar ingredientes que possam conter lactose oculta.
Objetivos: Luiza quer aprender mais sobre nutrição e saúde, especialmente em relação à sua intolerância à lactose. Ela deseja encontrar novas receitas e opções de alimentos que possam suprir suas necessidades nutricionais, sem abrir mão do sabor e da variedade.

## Pedro Gonçalves 
Idade: 35
Profissão: Desenvolvedor de sistemas
Personalidade: Pedro é um jovem sedentário, desanimado que não tem disposição física. Ele passa muitas horas do dia sentado focado em seu trabalho.
Histórico de saúde: Pedro foi diagnosticado com hipertensão, colesterol alto e diabetes.
Desafios: Pedro  tem dificuldades para encontrar opções de alimentos saudáveis que sejam práticos e ao mesmo tempo sem açúcar, com baixo teor de sal e gordura
Objetivos: Pedro  quer melhorar sua saúde com opções de alimentos saudáveis, para que ele tenha disposição física para praticar atividades físicas.

## João Norman 
Idade: 26
Profissão:  Estudante de Veterinária
Personalidade: Com ideais de uma vida mais saudável, João é um universitário ativo, que se exercita regularmente e praticante de corridas.
Histórico de Saúde: Saudável, sem conhecimento de nenhuma doença ou restrição alimentar fisiológica.
Desafios: João depois que se tornou vegano, percebeu que tem dificuldades de encontrar alimentos veganos, para seu novo estilo de vida alimentar, em especial alimentos para substituir a proteína animal.
Objetivo: João quer permanecer com seu estilo de vida saudável, no entanto, precisa consumir alimentos que não levam em sua composição nada que provenha de fonte animal, e tem conhecimento que precisa suprir isso em outros tipos de alimentos.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|----------------------|------------------------------------|----------------------------------------|
| Ana                  | Ana deseja encontrar receitas que sejam adaptadas às suas necessidades como dançarina. Além disso, Ana quer ter a possibilidade de compartilhar e comentar as receitas que ela experimentou.           | Porque se preocupa em consumir alimentos que forneçam energia para suas atividades e ajudem a manter um corpo forte e saudável.              |
| Luiza                | Luiza quer aprender mais sobre nutrição e saúde, especialmente em relação à sua intolerância à lactose. E deseja salvar suas receitas favoritas e assim receber sugestões de receitas semelhantes às que salvou.                 | Porque ela procura novas receitas e opções de alimentos que possam suprir suas necessidades nutricionais, sem abrir mão do sabor e da variedade. |
| Pedro                | Pedro busca perder peso, ele precisa de alimentos saudáveis, para alcançar seus objetivos e ter opções balanceadas. Pedro quer ter uma opção de criação de lista de compras para realizar suas receitas com os produtos certos.                 | Porque ele procura receitas fáceis e práticas para o dia a dia, pois não tem muita disposição para cozinhar. |
| João                 | João busca encontrar opções para novo estilo de vida alimentar, a vegana, em especial para suprir as necessidades da proteína animal.                 | João se tornou vegano, durante o seu curso de veterinária, ao compreender os efeitos da indústria alimentícia aos animais, e o sofrimento dos mesmo. |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID      | Descrição do Requisito  | Prioridade |
|---------|-----------------------------------------|------------|
| RF-01   | Receitas: o site pode oferecer uma variedade de receitas para diversos públicos, com restrições alimentares ou não.  | ALTA       | 
| RF-02   | Lista de compras: o site pode oferecer uma funcionalidade para criar uma lista de compras com os ingredientes necessários para cada receita selecionada.   | BAIXA      |
| RF-03   | Criação de perfil: a possibilidade de criar um perfil pessoal permite que os usuários salvem suas receitas favoritas e compartilhem suas próprias receitas com outros usuários.   | MÉDIA      |
| RF-04   | Sugestões de receitas relacionadas: o site pode oferecer sugestões de receitas relacionadas com base nas receitas já pesquisadas pelo usuário.   | MÉDIA      |
| RF-05   | Compartilhamento nas redes sociais: a possibilidade de compartilhar as receitas nas redes sociais pode ajudar a aumentar a visibilidade do site e permitir que os usuários compartilhem receitas interessantes com seus amigos e familiares.   | MÉDIA      |
| RF-06   | O site poderá permitir que os usuários avaliem e comentem sobre a receita que já realizaram.   | MÉDIA      |
| RF-07   | O site mostrará os comentários juntamente com as receitas   | MÉDIA      |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
