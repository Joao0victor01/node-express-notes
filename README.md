# Express Notes API

A API de notas mínima construída com **Express**, **CORS** e **body‑parser**. Ideal para demonstrar um CRUD simples sem banco de dados, pronto para ser estendido com MongoDB, SQLite ou outro storage.

## Requisitos
- Node.js >= 18 (o ambiente já tem Node disponível)

## Instalação
```bash
cd /home/impar/github-projects/node-express-notes
npm install   # instala dependências
```

## Execução
```bash
npm start   # ou: node index.js
```
A API rodará em `http://localhost:3000`.

## Endpoints
| Método | URL | Descrição |
|--------|-----|-----------|
| GET | `/api/notes` | Lista todas as notas |
| POST | `/api/notes` | Cria uma nota (campo `title` obrigatório) |
| GET | `/api/notes/:id` | Busca nota por ID |
| PUT | `/api/notes/:id` | Atualiza título e/ou conteúdo |
| DELETE | `/api/notes/:id` | Remove a nota |

## Como usar
```bash
# exemplo: criar nota
curl -X POST http://localhost:3000/api/notes -H "Content-Type: application/json" -d '{"title":"Minha nota","content":"Texto da nota"}'
```

## Extensões sugeridas
- Substituir o array em memória por **MongoDB** (`mongoose`) ou **SQLite** (`better-sqlite3`).
- Adicionar autenticação JWT.

## Licença
MIT