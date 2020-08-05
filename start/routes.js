'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group('api', () => {
  Route.get('icons', 'IconsController.all');
  Route.get('components', 'ComponentsController.all');

  //Boards
  Route.get('boards', 'BoardsController.all');
  Route.post('board', 'BoardsController.create');
  Route.patch('board/:id', 'BoardsController.update');

  //Pages
  Route.get('pages', 'PagesController.all');
  Route.post('page', 'PagesController.create');
  Route.patch('page/:id', 'PagesController.update');

  //Groups
  Route.get('groups', 'GroupsController.all');
  Route.post('group', 'GroupsController.create');
  Route.patch('group/:id', 'GroupsController.update');

  //Tiles
  Route.get('tiles', 'TilesController.all');
  Route.post('tile', 'TilesController.create');
  Route.patch('tile/:id', 'TilesController.update');

}).prefix('api/v1')
     .middleware('guest');

Route.any('*', 'SpaController.index').middleware('guest');
