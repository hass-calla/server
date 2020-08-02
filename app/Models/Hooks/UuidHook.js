'use strict'

const {v4: uuidV4} = require("uuid");

const UuidHook = exports = module.exports = {}

UuidHook.uuid = async (modelInstance) => {
  modelInstance.id = uuidV4();
}
