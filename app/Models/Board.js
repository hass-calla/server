'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

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

  getFully(value) {
    return Board.getJSON(value);
  }

  setFully(value) {
    return Board.setJSON(value);
  }

  getBackground(value) {
    return Board.getJSON(value);
  }

  setBackground(value) {
    return Board.setJSON(value);
  }

  getMeta(value) {
    return Board.getJSON(value);
  }

  setMeta(value) {
    return Board.setJSON(value);
  }

  pages() {
    return this.hasMany('App/Models/Page');
  }

  groups() {
    return this.hasMany('App/Models/Group');
  }

  tiles() {
    return this.hasMany('App/Models/Tile');
  }

  toJSON() {
    let data = super.toJSON();

    if(data.__meta__) {
      data = {
        ...data,
        ...data.__meta__
      }

      delete data.__meta__;
    }

    return data;
  }

}

module.exports = Board;
