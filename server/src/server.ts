import express from 'express'

const app = express()
app.use(express.json())

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vêm na própria rota, opcionais, separados por ponto de interrogação, usados para filtragem e/ou paginação
// Request Body: Parâmetros para criação/atualização de informações

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
  const data = request.body
  console.log(data)
  const user = {
    name: data.name,
    email: data.email
  }
  return response.json(user)
})

app.listen(3333)