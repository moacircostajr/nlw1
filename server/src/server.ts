import express from 'express'

const app = express()

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vêm na própria rota, opcionais, separados por ponto de interrogação, usados para filtragem e/ou paginação

const users = [
  'Diego',
  'Cleiton',
  'Robson',
  'Daniel'
]

app.get('/users', (request, response) => {
  const search = String(request.query.search)
  console.log(search)
  const filteredUsers = search ? users.filter(user => user.includes(search)) : users
  // response.send('Hello World!')
  // JSON
  return response.json(filteredUsers)
})

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id)
  const user = users[id]
  return response.json(user)
})

app.post('/users', (request, response) => {
  const user = {
    name: 'Diego',
    email: 'diego@rocketseat.com.br'
  }
  return response.json(user)
})

app.listen(3333)