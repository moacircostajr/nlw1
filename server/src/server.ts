import express from 'express'

const app = express()

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

app.get('/users', (request, response) => {
  console.log('Listagem de usuários')
  // response.send('Hello World!')
  // JSON
  return response.json(['Diego', 'Cleiton', 'Robson', 'Moacir'])
})

app.post('/users', (request, response) => {
  const user = {
    name: 'Diego',
    email: 'diego@rocketseat.com.br'
  }
  return response.json(user)
})

app.listen(3333)