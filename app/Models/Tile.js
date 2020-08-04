'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tile extends Model {

  static boot() {
    super.boot();
    Tile.addTrait('JsonCast');
    Tile.addHook('beforeCreate', 'UuidHook.uuid');
  }

  static get primaryKey() {
    return "id";
  }

  static get incrementing() {
    return false;
  }

  getEntityId(value) {
    return Tile.getJSON(value);
  }

  setEntityId(value) {
    return Tile.setJSON(value);
  }

  getStateStyle(value) {
    return Tile.getJSON(value);
  }

  setStateStyle(value) {
    return Tile.setJSON(value);
  }

  getConditionalStyle(value) {
    return Tile.getJSON(value);
  }

  setConditionalStyle(value) {
    return Tile.setJSON(value);
  }

  getMeta(value) {
    return Tile.getJSON(value);
  }

  setMeta(value) {
    return Tile.setJSON(value);
  }

  group () {
    return this.belongsTo('App/Models/Group')
  }

}

module.exports = Tile
