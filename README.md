# 📝 API de Lista de Tarefas

Este é um projeto de **API REST** para gerenciamento de tarefas, desenvolvido com **Node.js** e **Express**. Ele permite que os usuários **criem, editem, excluam e listem tarefas**, com autenticação via **JWT** e banco de dados **MySQL** utilizando o **Sequelize**.

---

## 🚀 Tecnologias Utilizadas

- 🟢 **Node.js** - Ambiente de execução JavaScript no backend  
- 🚀 **Express** - Framework para criação de APIs  
- 🛢 **MySQL** - Banco de dados relacional  
- 🔄 **Sequelize** - ORM para comunicação com o MySQL  
- 🔐 **JWT (JSON Web Token)** - Autenticação segura  
- 🔒 **Bcrypt** - Criptografia de senhas  
- 📂 **Arquitetura MVC** - Organização do código  

---

## 📌 Funcionalidades  

✔ Cadastro de usuários com criptografia de senha  
✔ Login com geração de token JWT  
✔ Criação, edição, listagem e remoção de tarefas  
✔ Proteção de rotas com autenticação  
✔ Banco de dados gerenciado via Sequelize  

---

## ⚙️ **Instalação e Uso**

### **1️⃣ Clonar o Repositório**
```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
cd NOME-DO-REPOSITORIO
```bash

### **2️⃣ Instalar Dependências**
```bash
npm install

### **3️⃣ Configurar o Banco de Dados**
Crie um banco de dados MySQL e edite o arquivo .env com suas credenciais:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=nome_do_banco
DB_DIALECT
PORT=3000

### **4️⃣ Executar as Migrações do Sequelize
```bash
npx sequelize db:migrate


