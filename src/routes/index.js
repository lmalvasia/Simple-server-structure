const express = require('express');
const charactersRoutes = require('./charactersRoutes');
const authRoutes = require('./authRoutes');

const router = express.Router();

router.use('/characters', charactersRoutes);
router.use('/auth', authRoutes);

module.exports = router;
