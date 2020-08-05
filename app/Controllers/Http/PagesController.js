'use strict'

const components = require('../../Components');
const Board = use('App/Models/Board');
const Page = use('App/Models/Page');

class PagesController {

  async all({request}) {
    const board = await Board.findOrFail(request.input('boardId'));

    return (await board.pages().fetch())
      .rows
      .map(p => p.toJSON());
  }

  async create({request}) {
    const board = await Board.findOrFail(request.input('boardId'));

    const page = new Page;
    page.name = "New Page";
    page.icon = "";
    page.meta = {};
    page.order = 9999;
    page.background = {
      active: false,
      type: 'solid',
      color: '#4B4B4BFF',
      images: [],
      autoplayDuration: 3000
    };

    await board.pages().save(page);
    await page.reload();

    return page.toJSON();
  }

  async update({request, params}) {
    const page = await Page.query()
                      .where('board_id', request.input('boardId'))
                      .where('id', params.id)
                      .firstOrFail();

    page.name = request.input('name');
    page.icon = request.input('icon', "");
    page.meta = request.input('meta', {});
    page.order = request.input('order', 9999);
    page.background = request.input('background');

    await page.save();

    return page.toJSON();
  }

}

module.exports = PagesController
