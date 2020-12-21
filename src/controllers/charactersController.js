const models = require('../models');

const getAllCharacters = async (req, res) => {
  try {
    const characters = await models.Characters.find({});

    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred.',
    });
  }
};

const createCharacter = async (req, res) => {
  try {
    const newCharacter = new models.Characters({
      name: req.body.name,
      specie: req.body.specie,
      gender: req.body.gender
    });
    const result = await newCharacter.save();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred.',
    });
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const result = await models.Characters.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(400).json({
        msg: 'The character has not been found.',
      });
    }
    return res.status(200).json({
      msg: 'The character has been deleted.',
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred.',
    });
  }
};

module.exports = {
  getAllCharacters,
  createCharacter,
  deleteCharacter
};
