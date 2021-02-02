import knex from 'knex'
import path from 'path'

// path: 'database' 'index.js' => database/index.js

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  }
})

export default connection