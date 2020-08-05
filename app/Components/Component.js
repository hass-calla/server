'use strict';

class Component {

  constructor(name, minWidth = 1, minHeight = 1) {
    this.name = name;
    this.minWidth = minWidth;
    this.minHeight = minHeight;
  }

  get syncFriendlyName() {
    return true;
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

  conditionalStyle() {
    return []
  }

  meta() {
    return {}
  }

  form() {
    return {
      type: this.name,
      width: this.minWidth,
      height: this.minHeight,
      sync_friendly_name: this.syncFriendlyName,
      state_style: this.stateStyle(),
      conditional_style: this.conditionalStyle(),
      entity_id: this.supportingMultipleEntities() ? [] : "",
      meta: this.meta()
    }
  }

}

module.exports = Component;
