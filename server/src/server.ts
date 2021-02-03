import express from 'express'
import path from 'path'
import routes from './routes' // o ./ não é necessário quando o arquivo a ser importado está dentro da pasta node_modules

const app = express()
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333)