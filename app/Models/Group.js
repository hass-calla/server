'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Group extends Model {

  static boot() {
    super.boot();
    Group.addHook('beforeCreate', 'UuidHook.uuid');
  }

  static get primaryKey() {
    return "id";
  }

  static get incrementing() {
    return false;
  }

  tiles () {
    return this.hasMany('App/Models/Tile')
  }

}

module.exports = Group
