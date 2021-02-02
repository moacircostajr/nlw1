import express from 'express'
import routes from './routes' // o ./ não é necessário quando o arquivo a ser importado está dentro da pasta node_modules

const app = express()
app.use(express.json())
app.use(routes)

app.listen(3333)