import knex from 'knex'
import path from 'path'

// path: 'database' 'index.js' => database/index.js

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
})

export default connection

// Migrations: histórico do banco de dados
