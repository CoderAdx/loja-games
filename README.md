# 🕹 Loja de Games - Backend

API RESTful para uma Loja de Games, construída com **NestJS**, **TypeORM** e **MySQL**.  
O projeto permite gerenciar **Produtos** e **Categorias**, incluindo o relacionamento **One-to-Many** (uma Categoria possui vários Produtos).

---

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [Insomnia](https://insomnia.rest/) (para testes)

---

## 📂 Estrutura de Pastas

src/
├── produto/
│ ├── controllers/ # Controladores (rotas)
│ ├── entities/ # Entidades (modelos do banco)
│ ├── services/ # Serviços (regras de negócio)
│ └── produto.module.ts
│
├── categoria/
│ ├── controllers/
│ ├── entities/
│ ├── services/
│ └── categoria.module.ts
│
├── app.module.ts
└── main.ts


---

## ⚙️ Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/loja-games.git
   cd loja-games

    Instale as dependências:

npm install

Configure o banco MySQL em app.module.ts:

TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'lojagames',
  autoLoadEntities: true,
  synchronize: true,
})

Inicie o projeto:

    npm run start:dev

📌 Endpoints Principais
Categorias

    POST /categorias → criar categoria

    GET /categorias → listar categorias

    GET /categorias/:id → buscar por id

    GET /categorias/nome/:nome → buscar por nome

    PUT /categorias → atualizar categoria

    DELETE /categorias/:id → remover categoria

Produtos

    POST /produtos → criar produto

    GET /produtos → listar produtos

    GET /produtos/:id → buscar por id

    GET /produtos/nome/:nome → buscar por nome

    PUT /produtos → atualizar produto

    DELETE /produtos/:id → remover produto

🧪 Testes com Insomnia

Exemplo de criação de Produto:

{
  "nome": "The Witcher 3",
  "preco": 120.50,
  "descricao": "RPG de ação em mundo aberto",
  "categoria": { "id": 1 }
}