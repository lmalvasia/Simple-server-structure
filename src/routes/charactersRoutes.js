const express = require('express');
const charactersController = require('../controllers/charactersController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .get('/', authMiddleware, charactersController.getAllCharacters)
  .post('/', authMiddleware, charactersController.createCharacter)
  .delete('/:id', authMiddleware, charactersController.deleteCharacter);

module.exports = router;
