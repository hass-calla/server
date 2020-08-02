'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Page extends Model {

  static boot() {
    super.boot();
    Page.addHook('beforeCreate', 'UuidHook.uuid');
  }

  static get primaryKey() {
    return "id";
  }

  static get incrementing() {
    return false;
  }

  board () {
    return this.belongsTo('App/Models/Board')
  }

  groups () {
    return this.hasMany('App/Models/Group')
  }

}

module.exports = Page
