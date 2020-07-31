'use strict'
const components = require('../../Components');

class ComponentsController {

  async all() {
    return Object.values(components).map((ComponentClass) => {
      const component = new ComponentClass;

      return {
        "name": component.name,
        "form": component.form(),
        "domains": component.supportedDomains(),
        "multipleEntities": component.supportingMultipleEntities()
      }
    });
  }

}

module.exports = ComponentsController
