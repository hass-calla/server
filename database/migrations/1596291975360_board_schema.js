'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BoardSchema extends Schema {
  up() {
    this.create('boards', (table) => {
      table.uuid("id").primary();

      table.string('name').nullable();

      table.json('fully').nullable();
      table.json('background').nullable();
      table.json('meta').nullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('boards');
  }
}

module.exports = BoardSchema;
