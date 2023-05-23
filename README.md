
# DCN e-Commerce

Este é um projeto de um e-commerce baseado em React com Vite simulando uma consulta em uma base de dados, com lista dinâmica de objetos.

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## Instalação do React com Vite via VSCode:

### Para instalar o React com Vite via VSCode, siga os seguintes passos:
    
1. Abra o VSCode.
2. Crie um novo diretório para o projeto.
3. Abra o terminal integrado no VSCode.
4. Execute o seguinte comando para criar o projeto com o Vite:


```bash 
    npm init -y
    npm install --save-dev react react-dom vite

```
5. Agora você pode começar a desenvolver seu projeto em React com Vite.
6. Não esqueça de rodar a página para testar ao longo do desenvolvimento
```bash
    npm run dev

```
#### Agora sim:

      VITE v4.1.4  ready in 8110 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h to show help


    
## Mock de dados
    Para simular uma base de dados, vamos criar uma lista com os seguintes dados:

![image](https://img.shields.io/badge/Xbox-107C10?style=for-the-badge&logo=xbox&logoColor=white)
![image](https://img.shields.io/badge/Nintendo_Switch-E60012?style=for-the-badge&logo=nintendo-switch&logoColor=white)

| id | imgPath          | imgPathDetails           | title           | price       | color    | category  | description             |
|----|------------------|--------------------------|-----------------|-------------|----------|-----------|-------------------------|
| 1  | xbox-x.png       | xbox-x-details.png       | Xbox X          | R$ 5.000,00 | preto    | videogame | Console Xbox X          |
| 2  | xbox-serie-s.png | xbox-serie-s-details.png | Xbox Série S    | R$ 3.000,00 | branco   | videogame | Console Xbox Série S    |
| 3  | switch.png       | switch-details.png       | Nintendo Switch | R$ 2.500,00 | vermelho | videogame | Console Nintendo Switch |
| 4  | god-of-war.png   | god-of-war-details.png   | God of War      | R$ 200,00   | n/a      | jogo      | Jogo God of War         |
| 5  | zelda.png        | zelda-details.png        | Zelda           | R$ 300,00   | n/a      | jogo      | Jogo Zelda              |
| 6  | gran-turismo.png | gran-turismo-details.png | Gran Turismo    | R$ 250,00   | n/a      | jogo      | Jogo Gran Turismo       |
| 7  | uncharted.png    | uncharted-details.png    | Uncharted       | R$ 150,00   | n/a      | jogo      | Jogo Uncharted          |

    A lista pode ser criada no chatGpt


## Manipulação dos dados via "props"
Para passar dados entre componentes em React, podemos utilizar as props. Por exemplo:

    import React from 'react';

        function Product({ name, price }) {
            return (
                <div>
                <h2>{name}</h2>
                <p>{price}</p>
                </div>
            );
        }

    export default Product;

## Estrutura de diretórios
O projeto deve ter a seguinte estrutura de diretórios:

```
    .
    ├── src
    │   ├── App.jsx
    │   ├── index.scss
    │   ├── index.jsx
    │   ├── views
    │           ├── Home
    │           ├── Login
    │           ├── Pay
    │           └── Product
    ├── components
    │      ├── AdvertCard
    │      ├── Footer
    │      ├── Header
    │      ├── HeaderMenu
    │      ├── ModalCarrinho
    │      ├── ModalPayment
    │      └── ProductDetails
    └── package.json
```


### Autor
---





Feito com ❤️ por Eduardo 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Eduardo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/eduardo-pateis-joaquim/)](https://www.linkedin.com/in/eduardo-pateis-joaquim/) 

