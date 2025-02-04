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
git clone https://github.com/WellingtonSilva12/api_tasklist.git
cd api_tasklist
```

### **2️⃣ Instalar Dependências**

```bash
npm install
```

### **3️⃣ Configurar o Banco de Dados**
Crie um banco de dados MySQL e edite o arquivo .env com suas credenciais:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=nome_do_banco
DB_DIALECT=mysql
PORT=3000
```

### **4️⃣ Executar as Migrações do Sequelize

```bash
npx sequelize db:migrate
```

### **5️⃣ Iniciar o servidor
```bash
npm start
```
A API estará rodando em http://localhost:3000


### **6️⃣ Testar a API**
Você pode usar ferramentas como Postman ou Insomnia para testar as rotas da API.

##### **💠Autenticação** 
| Método | Rota                | Descrição                              |
|--------|---------------------|----------------------------------------|
| POST   | /users              | Cria um novo usuário                   |
| POST   | /sessions           | Cria uma nova sessão (login)          |
| PUT    | /users              | Atualiza informações do usuário        |

##### **💠Tarefas (Protegidas por JWT)**


| Método | Rota                | Descrição                              |
|--------|---------------------|----------------------------------------|
| POST   | /tasks              | Cria uma nova tarefa                   |
| GET    | /tasks              | Lista todas as tarefas                 |
| PUT    | /tasks/:task_id     | Atualiza uma tarefa específica         |
| DELETE    | /tasks/:task_id     | Apaga uma tarefa específica         |


