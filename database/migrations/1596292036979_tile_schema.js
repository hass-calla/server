'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TileSchema extends Schema {
  up() {
    this.create('tiles', (table) => {
      table.uuid('id').primary();

      table.uuid('group_id').references('id').inTable('groups');
      table.uuid('board_id').references('id').inTable('boards');

      table.integer('order').defaultTo(999);
      table.string('name').nullable();
      table.string('type').nullable();
      table.integer('width').defaultTo(1);
      table.integer('height').defaultTo(1);

      table.json('entity_id').nullable();
      table.json('state_style').nullable();
      table.json('conditional_style').nullable();
      table.json('meta').nullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('tiles');
  }
}

module.exports = TileSchema;
