var express = require('express');
var mots = express.Router();
var motController = require('../controller/controllerMot')

mots.get("/getMot", motController.getMot)
mots.post("/addMot",motController.addMot)
mots.get("/getRandom",motController.getMotRandom)
mots.delete('/delete/:id',motController.deletMot)

module.exports = mots