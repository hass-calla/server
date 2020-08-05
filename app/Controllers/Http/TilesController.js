'use strict';

const Group = use('App/Models/Group');
const Tile = use('App/Models/Tile');

class TilesController {

  async all({request}) {
    const group = await Group.findOrFail(request.input('groupId'));

    return (await group.tiles().fetch())
      .rows
      .map(p => p.toJSON());
  }

  async create({request}) {
    const group = await Group.findOrFail(request.input('groupId'));

    const tile = new Tile;

    tile.name = "";
    tile.sync_friendly_name = true;
    tile.type = "";
    tile.entity_id = "";
    tile.state_style = [];
    tile.conditional_style = [];
    tile.meta = {};
    tile.board_id = group.board_id;

    await group.tiles().save(tile);
    await tile.reload();

    return tile.toJSON();
  }

  async update({request, params}) {
    const tile = await Tile.query()
                           .where('group_id', request.input('groupId'))
                           .where('id', params.id)
                           .firstOrFail();

    tile.name = request.input('name');
    tile.sync_friendly_name = request.input('sync_friendly_name');
    tile.type = request.input('type');
    tile.width = request.input('width');
    tile.height = request.input('height');
    tile.entity_id = request.input('entity_id');
    tile.state_style = request.input('state_style');
    tile.conditional_style = request.input('conditional_style');
    tile.meta = request.input('conditional_style');
    tile.order = request.input('order');

    await tile.save();

    return tile.toJSON();
  }

}

module.exports = TilesController;
