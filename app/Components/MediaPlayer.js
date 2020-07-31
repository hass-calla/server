'use strict';

const Component = require('./Component');

class MediaPlayer extends Component {

  constructor() {
    super("media-player", 1, 1);
  }

  supportingMultipleEntities() {
    return true;
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

module.exports = MediaPlayer;
