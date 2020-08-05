'use strict';

const components = require('../../Components');
const Board = use('App/Models/Board');
const Page = use('App/Models/Page');
const Group = use('App/Models/Group');

class GroupsController {

  async all({request}) {
    const page = await Page.findOrFail(request.input('pageId'));

    return (await page.groups().fetch())
      .rows
      .map(p => p.toJSON());
  }

  async create({request}) {
    const page = await Page.findOrFail(request.input('pageId'));

    const group = new Group;

    group.name = "New Group";
    group.icon = "";
    group.meta = {};
    group.order = 9999;
    group.name_visible = true;
    group.board_id = page.board_id;

    page.groups().save(group);

    return group.toJSON();
  }

  async update({request, params}) {
    const group = await Group.query()
                           .where('page_id', request.input('pageId'))
                           .where('id', params.id)
                           .firstOrFail();

    group.name = request.input('name');
    group.order = request.input('order');
    group.icon = request.input('icon');
    group.name_visible = request.input('name_visible');
    group.meta = request.input('meta');
    group.save();
    group.reload();

    return group.toJSON();
  }

}

module.exports = GroupsController;
