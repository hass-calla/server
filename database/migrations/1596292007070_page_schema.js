'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PageSchema extends Schema {
  up() {
    this.create('pages', (table) => {
      table.uuid("id").primary();

      table.uuid('board_id').references('id').inTable('boards');

      table.integer('order').defaultTo(999);
      table.string('name').nullable();
      table.string('icon').nullable();

      table.json('background').nullable();
      table.json('meta').nullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('pages');
  }
}

module.exports = PageSchema;
