'use strict';
const components = require('../../Components');

const Board = use('App/Models/Board');

class ComponentsController {

  async all() {
    return (await Board.query()
                       .withCount('pages as pages_count')
                       .withCount('groups as groups_count')
                       .withCount('tiles as tiles_count')
                       .fetch()).rows.map(b => b.toJSON());
  }

  async create() {
    const board = new Board;

    board.name = "New Board";
    board.meta = {};
    board.fully = {
      enable: false,
      devices: []
    };
    board.background = {
      type: 'solid',
      color: '#4B4B4BFF',
      images: [],
      autoplayDuration: 3000
    };
    board.save();

    return board.toObject();
  }

  async update({params, request}) {
    const board = await Board.findOrFail(params.id);

    board.name = request.input('name');
    board.background = request.input('background');
    board.fully = request.input('fully');
    board.meta = request.input('meta');
    board.save();

    return board.toObject();
  }

}

module.exports = ComponentsController;
