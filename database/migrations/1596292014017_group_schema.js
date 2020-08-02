'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class GroupSchema extends Schema {
  up() {
    this.create('groups', (table) => {
      table.uuid("id").primary();

      table.uuid('page_id').references('id').inTable('pages');

      table.integer('order').defaultTo(999);
      table.string('name').nullable();
      table.boolean('name_visible').nullable();
      table.string('icon').nullable();

      table.json('meta').nullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('groups');
  }
}

module.exports = GroupSchema;
