# 📦 Controle de Estoque via Console

Aplicação de console (CLI) desenvolvida em Node.js para gerenciamento de produtos. O sistema permite cadastrar, listar, buscar, remover e calcular o valor total de um estoque de forma interativa.

## 📄 Sobre o Projeto

Este projeto é uma solução simples e eficaz para o controle de estoque, executada diretamente no terminal. Ele foi criado como um desafio integrador para praticar lógica de programação, manipulação de arrays e entrada de dados do usuário em JavaScript com Node.js. O sistema possui validações para garantir a integridade dos dados, como checagem de preços, quantidades e nomes duplicados.

## ✨ Funcionalidades

  - ✅ **Cadastrar produtos:** Adiciona novos produtos com nome, preço e quantidade.
  - 📋 **Listar produtos:** Exibe todos os itens cadastrados, formatados com seu valor e quantidade.
  - 💰 **Calcular valor total:** Mostra o valor total do estoque somando o preço de todos os produtos multiplicados por sua quantidade.
  - 🔍 **Buscar por nome:** Permite encontrar um produto específico no estoque.
  - ❌ **Remover produto:** Exclui um produto do estoque pelo nome.
  - 🔒 **Validações:** Impede o cadastro de produtos com nomes duplicados, vazios ou com valores/quantidades inválidas.

## 🛠️ Tecnologias Utilizadas

  - [Node.js](https://nodejs.org/en/)
  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [prompt-sync](https://www.npmjs.com/package/prompt-sync) (para entrada de dados síncrona no console)

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

  - [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
  - [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

### Passo a Passo

1.  **Clone o repositório:**

    ```sh
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

    *Substitua `seu-usuario` e `nome-do-repositorio` pelos seus dados.*

2.  **Acesse a pasta do projeto:**

    ```sh
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    O projeto utiliza a biblioteca `prompt-sync`. Instale-a com o comando:

    ```sh
    npm install
    ```

4.  **Execute a aplicação:**

    ```sh
    node nome_do_seu_arquivo.js
    ```

    *Troque `nome_do_seu_arquivo.js` pelo nome do seu arquivo principal (ex: `index.js`, `app.js`).*

## 🖥️ Exemplo de Uso

Ao executar o programa, você verá o seguinte execução:

```sh
----------Bem vindo ao Sistema de Cadastro de Produtos----------

--- MENU DE OPÇÕES ---
[1]. Cadastrar produtos
[2]. Listar produtos
[3]. Buscar por nome
[4]. Total em estoque
[5]. Remover produto
[0]. Sair
----------------------
Escolha uma opção: 1
Qual item deseja cadastrar? Copo
Digite o preço do produto: 10
Digite a quantidade do produto: 33
Produto cadastrado com sucesso!

--- MENU DE OPÇÕES ---
[1]. Cadastrar produtos
...
[0]. Sair
----------------------
Escolha uma opção: 2
 ---Aqui está seu estoque cadastrado-----
- 1. Copo - R$ 10.00 - Quantidade: 33
Valor total do estoque: R$ 330.00

--- MENU DE OPÇÕES ---
[1]. Cadastrar produtos
...
[0]. Sair
----------------------
Escolha uma opção: 3
Digite o nome do produto que deseja buscar: COPO
Produto encontrado: Copo - R$ 10.00 - Quantidade: 33

--- MENU DE OPÇÕES ---
[1]. Cadastrar produtos
...
[0]. Sair
----------------------
Escolha uma opção: 4
Valor total em estoque: R$ 330.00

--- MENU DE OPÇÕES ---
[1]. Cadastrar produtos
...
[0]. Sair
----------------------
Escolha uma opção: 5
Digite o nome do produto que deseja remover: copo
Produto removido com sucesso.

--- MENU DE OPÇÕES ---
[1]. Cadastrar produtos
...
[0]. Sair
----------------------
Escolha uma opção: 2
Você não possui itens cadastrados.

--- MENU DE OPÇÕES ---
[1]. Cadastrar produtos
...
[0]. Sair
----------------------
Escolha uma opção: 0
Finalizado... Até mais!
```

-----
