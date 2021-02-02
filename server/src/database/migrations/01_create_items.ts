import Knex from 'knex'

export async function up(knex: Knex) {
  // CRIAR A TABELA
  knex.schema.createTable('items', table => {
    table.increments('id').primary()
    table.string('image').notNullable()
    table.string('title').notNullable()
  })
}

export async function down(knex: Knex) {
  // VOLTAR ATRÁS (DELETAR A TABELA)
  knex.schema.dropTable('items')
}