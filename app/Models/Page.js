'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Page extends Model {

  static boot() {
    super.boot();
    Page.addTrait('JsonCast');
    Page.addHook('beforeCreate', 'UuidHook.uuid');
  }

  static get primaryKey() {
    return "id";
  }

  static get incrementing() {
    return false;
  }

  getBackground(value) {
    return Page.getJSON(value);
  }

  setBackground(value) {
    return Page.setJSON(value);
  }

  getMeta(value) {
    return Page.getJSON(value);
  }

  setMeta(value) {
    return Page.setJSON(value);
  }

  board () {
    return this.belongsTo('App/Models/Board')
  }

  groups () {
    return this.hasMany('App/Models/Group')
  }

}

module.exports = Page
