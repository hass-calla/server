'use strict'

class JsonCast {
  constructor() {
    this.columns = [];
  }

  register (Model) {
    this.columns = Model.jsonColumns;

    Model.addHook('beforeSave', this.stringify.bind(this));
    Model.addHook('afterSave', this.parse.bind(this));
    Model.addHook('afterFetch', this.parse.bind(this));
  }

  parse(modelInstance) {
    for(let column of this.columns) {
      const data = modelInstance[column];

      if(typeof data === 'string') {
        modelInstance[column] = JSON.parse(data);
      }
    }
  }

  stringify(modelInstance) {
    for(let column of this.columns) {
      const data = modelInstance[column];

      if(typeof data === 'object') {
        modelInstance[column] = JSON.stringify(data);
      }
    }
  }

}

module.exports = JsonCast
