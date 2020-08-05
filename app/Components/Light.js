'use strict';

const Component = require('./Component');

class Light extends Component {

  constructor() {
    super("light", 1, 1);
  }

  supportingMultipleEntities() {
    return false;
  }

  stateStyle() {
    return [
      {
        state: 'on',
        icon: 'lightbulb',
        color: '#ffffff',
        background: '#15BD72A2'
      },
      {
        state: 'off',
        icon: 'lightbulb-outline',
        color: '#ffffff',
        background: '#BD1549A2'
      }
    ]
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

module.exports = Light;
