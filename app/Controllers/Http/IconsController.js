'use strict'
const got = require('got');

class IconsController {

  async all() {
    const {body} = await got.get("https://materialdesignicons.com/api/package/38EF63D0-4744-11E4-B3CF-842B2B6CFE1B", {
      responseType: 'json'
    });

    return body.icons.map(icon => ({
      "id": icon.id,
      "name": icon.name,
      "aliases": icon.aliases,
    }));
  }

}

module.exports = IconsController
