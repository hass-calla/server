'use strict';

class JsonCast {
  register(Model) {
    Model.getJSON = function(value) {
      if(value && typeof value === 'string') {
        return JSON.parse(value);
      }

      return value;
    };

    Model.setJSON = function(value) {
      if(typeof value === 'object') {
        return JSON.stringify(value);
      }

      return value;
    };

  }

}

module.exports = JsonCast;
