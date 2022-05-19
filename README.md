<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/picinelli/projeto-mywallet-front">
    <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4b0.svg" alt="Logo" width="100">
  </a>

<h3 align="center">Projeto - MyWallet (FRONT-END)</h3>
  <h4 align="center"> 
	🚀 Concluído! 🚀
  </h4>
  <p align="center">
    Single-Page Application (SPA) de um Aplicativo de Controle de Gastos.
    <br />
    <a href="https://github.com/picinelli/projeto-mywallet-front/tree/main/src"><strong>Código JSX»</strong></a>
</div>

<!-- ABOUT THE PROJECT -->

![Banner](https://github.com/picinelli/projeto-mywallet-front/blob/main/src/assets/images/MyWalletBanner.png)

## OBS: Esse é um projeto FULL-STACK, para ver o código do BACK-END, <a href="https://github.com/picinelli/projeto-mywallet-back"><strong>Clique Aqui»</strong></a>

# Requisitos

- Geral
    - [x]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
    - [x]  Faça commits a cada funcionalidade implementada
    - [x]  Separe o projeto em dois projetos diferentes: um para o *front-end* e outro pro *back-end*.
    - [x]  Implemente o *front-end* utilizando HTML, CSS, JS e **React** e as tecnologias que utilizamos até aqui, conforme o necessário para atender o *layout*.

- Tela Login (rota `/`)
    - [x]  Deve ser enviado o email e senha para a API conforme documentação
    - [x]  Enquanto estiver carregando, os campos e o botão devem ser desabilitados
    - [x]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/inicio`
    - [x]  Em caso de falha, deve ser exibido um `alert` informando para o usuário e os campos/botão devem ser habilitados novamente
    - [x]  Ao clicar no link para se cadastrar, o usuário deve ser redirecionado para a rota `/cadastro`

- Tela Cadastro (rota `/cadastro`)
    - [x]  Os dados devem ser enviados para a API conforme documentação
    - [x]  Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout
    - [x]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/` (rota de Login)
    - [x]  Em caso de falha, deve ser exibido um alert informando para o usuário e os campos/botão devem ser habilitados novamente
    - [x]  Ao clicar no link para logar, o usuário deve ser redirecionado para a rota `/` (rota de Login)
        
- Tela Inicial (rota `/inicio`)
    - [x]  Carregar as entradas e saídas do usuário, mandando request pra API e exibindo conforme layout
    - [x]  Caso o usuário não tenha nenhuma entrada cadastrada, deve ser exibido um texto informando no lugar das entradas.
    - [x]  Ao clicar no botão de "Nova Entrada" ou "Nova Saída", deve-se redirecionar para as respectivas páginas `/nova-entrada` e `/nova-saida`

- Tela Editar Entradas/Saidas (rota  `/nova-entrada` e `/nova-saida`)
    - [x]  Ao clicar no botão de "Salvar entrada" ou "Salvar saída", deve-se enviar os dados da nova entrada para a API.
    - [x]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/inicio`

# Bônus (opcional)

- Deletar Entradas/Saidas
    - [x]  Ao clicar para deletar uma entrada ou saída, deve ser exibido um `confirm` para confirmar se o usuário gostaria realmente de apagar o entrada. Se sim, deve ser enviado um request pra API e as entradas recarregadas logo em seguida.

- Editar Entradas/Saidas
    - [x]  Ao clicar em cima de uma entrada ou saída, o usuário deve ser redirecionado para a respectiva página, seja `/atualizar-entrada` ou `/atualizar-saida`.
    - [x]  Ao clicar no botão de "Atualizar entrada" ou "Atualizar saída", deve-se enviar os dados da nova entrada para a API.
    - [x]  Ao atualizar, o usuário deve ser redirecionado para a tela principal com a movimentação já alterada.
    

### Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

<!-- CONTACT -->

### Contato

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Mail][mail-shield]][mail-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/pedro-ivo-brum-cinelli//
[mail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[mail-url]: mailto:cinelli.dev@gmail.com
