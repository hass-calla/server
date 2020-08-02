'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Board extends Model {

  static boot() {
    super.boot();
    Board.addTrait('JsonCast');
    Board.addHook('beforeCreate', 'UuidHook.uuid');
  }

  static get primaryKey() {
    return "id";
  }

  static get incrementing() {
    return false;
  }

  static get jsonColumns() {
    return [
      'fully',
      'background',
      'meta'
    ];
  }

  pages () {
    return this.hasMany('App/Models/Page')
  }

  getFully(data) {
    if(typeof data === 'string') {
      return JSON.parse(data);
    }

    return data;
  }

  setFully(data) {
    if(typeof data === 'object') {
      return JSON.stringify(data);
    }

    return data;
  }

  getBackground(data) {
    if(typeof data === 'string') {
      return JSON.parse(data);
    }

    return data;
  }

  setBackground(data) {
    if(typeof data === 'object') {
      return JSON.stringify(data);
    }

    return data;
  }

}

module.exports = Board
