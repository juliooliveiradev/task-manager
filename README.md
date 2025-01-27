# **Task Manager - Backend**

Este repositório contém o código do backend do sistema **Task Manager**, desenvolvido com **NestJS** e utilizando **TypeORM** para gerenciar dados no banco **PostgreSQL**.

---

## **Tecnologias Utilizadas**
- **NestJS**: Framework Node.js para construção de APIs escaláveis.
- **TypeORM**: ORM para mapeamento de dados.
- **PostgreSQL**: Banco de dados relacional.
- **TypeScript**: Tipagem estática para maior segurança no código.
- **Jest**: Framework de testes.

---

## **Pré-requisitos**
- **Node.js** (>= 18.18.0 ou superior).
- **PostgreSQL** instalado e configurado.
- **Yarn** ou **npm** para gerenciar pacotes.

---

## **Instalação e Configuração**
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/task-manager-backend.git
   cd task-manager-backend
2. Instale as dependências:
````
npm install
````
3. Configure o banco de dados no arquivo .env:
````
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=sua-senha
DB_NAME=task_manager
````
4. Execute as migrações do banco de dados:
````
npm run typeorm:migration:run
````
5. Inicie o servidor:
````
npm run start:dev
````

O backend estará rodando em http://localhost:3000.

Estrutura do Projeto
````
src/
├── auth/                  # Módulo de autenticação
├── tasks/                 # Módulo de gerenciamento de tarefas
│   ├── task.controller.ts # Controlador das tarefas
│   ├── task.service.ts    # Serviço das tarefas
│   └── task.entity.ts     # Entidade Task
├── app.module.ts          # Configuração principal do aplicativo
├── main.ts                # Arquivo de inicialização
└── config/                # Configurações adicionais
````
# Funcionalidades
API RESTful para CRUD de tarefas.
- Integração com PostgreSQL usando TypeORM.
- Testes unitários configurados com Jest (em progresso).
  
# Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
````
git checkout -b feature/nova-feature
````
3. Faça o commit das alterações:
````
git commit -m "Adicionada nova feature"
````
4. Envie para o repositório remoto:
````
git push origin feature/nova-feature
````
5. Abra um Pull Request.

# Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para mais informações.
