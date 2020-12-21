const express = require('express');
const charactersController = require('../controllers/charactersController');

const router = express.Router();

router
  .get('/', charactersController.getAllCharacters)
  .post('/', charactersController.createCharacter)
  .delete('/:id', charactersController.deleteCharacter);

module.exports = router;
