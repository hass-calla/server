'use strict';

class Component {

  constructor(name, minWidth = 1, minHeight = 1) {
    this.name = name;
    this.minWidth = minWidth;
    this.minHeight = minHeight;
  }

  supportingMultipleEntities() {
    return true;
  }

  supportedDomains() {
    return ["*"];
  }

  stateStyle() {
    return []
  }

  meta() {
    return {}
  }

  form() {
    return {
      id: "",
      type: this.name,
      name: "",
      width: this.minWidth,
      height: this.minHeight,
      stateStyle: this.stateStyle(),
      entityId: this.supportingMultipleEntities() ? [] : "",
      meta: this.meta()
    }
  }

}

module.exports = Component;
