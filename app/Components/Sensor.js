'use strict';

const Component = require('./Component');

class Sensor extends Component {

  constructor() {
    super("sensor", 1, 1);
  }

  supportingMultipleEntities() {
    return false;
  }

  form() {
    return {
      ...super.form(),
      icon: "lightbulb",
      offIcon: "lightbulb-outline"
    }
  }

  supports() {
    return {
      "SUPPORT_BRIGHTNESS" : 1,
      "SUPPORT_COLOR_TEMP" : 2,
      "SUPPORT_EFFECT" : 4,
      "SUPPORT_FLASH" : 8,
      "SUPPORT_COLOR" : 16,
      "SUPPORT_TRANSITION" : 32,
      "SUPPORT_WHITE_VALUE" : 128,
    }
  }

}

module.exports = Sensor;
