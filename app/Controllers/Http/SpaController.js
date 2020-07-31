'use strict'

class SpaController {

  index ({ view }) {
    return view.render('index')
  }

}

module.exports = SpaController
