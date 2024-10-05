# Projeto de Tela de Login e Listagem de Usuários

Este projeto é uma aplicação web que combina uma API backend desenvolvida em **Java 23** com **Spring Boot** e um frontend em **Angular18** (com Node.js 20.14.0). O sistema permite que administradores façam login, visualizem, editem e excluam usuários em uma listagem.

## Demonstração do Projeto

Baixe o vídeo para ver o resultado final do projeto:
https://github.com/user-attachments/assets/b1e2b6a7-f3e3-4ce4-95f6-b88271df82c2

---

## Funcionalidades Principais

1. **Tela de Login**: Validação de credenciais do usuário.
2. **Tela de Cadastro**: Criação de usuários.
3. **Listagem de Usuários**: Exibição de todos os usuários cadastrados.
4. **Edição e Exclusão de Usuários**: Administradores podem editar ou excluir usuários diretamente na lista.

---

## Estrutura do Projeto

### Frontend (Angular)

- **Tela de Login**: Formulário simples para inserção de credenciais.
- **Tela de Cadastro**: Formulário simples para inserção de dados.
- **Listagem de Usuários**: Exibe os usuários, com opções de edição e exclusão disponíveis para administradores.
- **Serviços**: Comunicação com o backend para autenticação e operações com usuários.

---

## Pré-requisitos

- **Node.js**: Versão 20.14.0.
- **Angular CLI**: Ferramenta de linha de comando para Angular.

---

## Passo a Passo para Instalação

### Backend (Spring Boot)

1. **Clone o repositório**: acessar https://github.com/GabzMatz/api.springboot.authentication para informações.

### Frontend (Angular)

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/app.angular.authentication.git
    ```
2. **Navegue até a pasta do projeto**:
    ```bash
    cd app.angular.authentication
    ```
3. **Instale as dependências**:
    ```bash
    npm install
    ```
4. **Certifique-se de que a API está rodando.**

5. **Execute a aplicação Angular**:
    ```bash
    npm run start
    ```

---

## Como Rodar o Projeto

1. **Inicie o backend**:
    - Execute o 'Run' no arquivo `AutheticationApplication.java` da api.
    - O backend estará disponível em `http://localhost:8080`.

2. **Inicie o frontend**:
    - Execute o comando `npm run start` na pasta do frontend.
    - O frontend estará disponível em `http://localhost:4200`.

3. **Acesse o sistema**:
    - Acesse o endereço `http://localhost:4200` e você verá a tela de login.
    - Após login, os administradores terão acesso à tela de listagem de usuários.

---

## Funcionalidades Futuras

- **Recuperação de Senha**: Implementação de uma funcionalidade para que os usuários possam recuperar suas senhas por e-mail.


