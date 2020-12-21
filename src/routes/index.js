const express = require('express');
const charactersRoutes = require('./charactersRoutes');

const router = express.Router();

router.use('/characters', charactersRoutes);

module.exports = router;
