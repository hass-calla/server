'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tile extends Model {

  static boot() {
    super.boot();
    Tile.addHook('beforeCreate', 'UuidHook.uuid');
  }

  static get primaryKey() {
    return "id";
  }

  static get incrementing() {
    return false;
  }

  group () {
    return this.belongsTo('App/Models/Group')
  }

}

module.exports = Tile
